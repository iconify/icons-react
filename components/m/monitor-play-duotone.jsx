import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wi3tu6byw.css';
import '../../css/u/uzmwkhbts.css';
import '../../css/a/ajs_333_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wi3tu6byw"/><path class="uzmwkhbts"/><path clip-rule="evenodd" class="ajs_333_f"/></g>`,
		"fallback": "lucide-extended:monitor-play-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l113mebii.css';
import '../../css/k/klnbdfb1f.css';
import '../../css/z/zsoc3xbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l113mebii"/><path class="klnbdfb1f"/><path class="zsoc3xbpo"/></g>`,
		"fallback": "lucide-extended:table-rows-split-duotone",
	});
}

export default Component;

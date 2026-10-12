import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3e-ge5gs.css';
import '../../css/u/uzmwkhbts.css';
import '../../css/p/p1cc6mb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r3e-ge5gs"/><path class="uzmwkhbts"/><path clip-rule="evenodd" class="p1cc6mb0o"/></g>`,
		"fallback": "lucide-extended:tv-minimal-play-duotone",
	});
}

export default Component;

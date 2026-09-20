import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d689_l3rr.css';
import '../../css/d/dmks4cbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d689_l3rr"/><path class="dmks4cbtk"/></g>`,
		"fallback": "solar:laptop-3-bold-duotone",
	});
}

export default Component;

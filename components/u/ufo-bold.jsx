import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gc_fy9prb.css';
import '../../css/e/e5q9u_oyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gc_fy9prb"/><path class="e5q9u_oyv"/></g>`,
		"fallback": "solar:ufo-bold",
	});
}

export default Component;

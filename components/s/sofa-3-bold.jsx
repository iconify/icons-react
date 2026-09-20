import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6djllvds.css';
import '../../css/j/j3vy76j9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n6djllvds"/><path class="j3vy76j9j"/></g>`,
		"fallback": "solar:sofa-3-bold",
	});
}

export default Component;

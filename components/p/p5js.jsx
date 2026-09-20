import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5hwm0brm.css';
import '../../css/q/qavibebok.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="p5hwm0brm"/><path class="qavibebok"/></g>`,
		"fallback": "skill-icons:p5js",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qqb6ntb-w.css';
import '../../css/g/glvbkmbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qqb6ntb-w"/><path class="glvbkmbyx"/></g>`,
		"fallback": "hugeicons:power-service",
	});
}

export default Component;

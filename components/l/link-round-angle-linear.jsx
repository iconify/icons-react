import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmx06yb-y.css';
import '../../css/i/i7x5mq7xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kmx06yb-y"/><path class="i7x5mq7xv"/></g>`,
		"fallback": "solar:link-round-angle-linear",
	});
}

export default Component;

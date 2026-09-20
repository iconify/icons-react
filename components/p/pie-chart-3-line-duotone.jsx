import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nauhfq_mx.css';
import '../../css/q/q1gckubhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nauhfq_mx"/><path class="q1gckubhf"/></g>`,
		"fallback": "solar:pie-chart-3-line-duotone",
	});
}

export default Component;

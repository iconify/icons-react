import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cp0_ni67i.css';
import '../../css/k/k02bxjbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cp0_ni67i"/><path class="k02bxjbns"/></g>`,
		"fallback": "solar:sim-card-minimalistic-broken",
	});
}

export default Component;

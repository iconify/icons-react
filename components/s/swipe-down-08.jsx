import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qc28hcb_v.css';
import '../../css/g/g035ddcwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qc28hcb_v"/><path class="g035ddcwh"/></g>`,
		"fallback": "hugeicons:swipe-down-08",
	});
}

export default Component;

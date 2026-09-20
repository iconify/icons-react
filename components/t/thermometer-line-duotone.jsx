import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kt-r4acqq.css';
import '../../css/u/upz17q1tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kt-r4acqq"/><path class="upz17q1tx"/></g>`,
		"fallback": "solar:thermometer-line-duotone",
	});
}

export default Component;

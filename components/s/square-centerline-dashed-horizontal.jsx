import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wfrt2fbfr.css';
import '../../css/o/ol5286b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wfrt2fbfr"/><path class="ol5286b3p"/></g>`,
		"fallback": "hugeicons:square-centerline-dashed-horizontal",
	});
}

export default Component;

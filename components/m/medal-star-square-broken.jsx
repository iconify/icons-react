import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o87xgabpe.css';
import '../../css/y/y8hrvjbyx.css';
import '../../css/v/vu5-wubns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o87xgabpe"/><path class="y8hrvjbyx"/><path class="vu5-wubns"/></g>`,
		"fallback": "solar:medal-star-square-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hws41otvx.css';
import '../../css/d/dplkn_mxv.css';
import '../../css/f/fhnye3b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hws41otvx"/><path class="dplkn_mxv"/><path class="fhnye3b1t"/></g>`,
		"fallback": "solar:star-ring-broken",
	});
}

export default Component;

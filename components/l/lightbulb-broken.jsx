import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uw6indbog.css';
import '../../css/x/xvqdltb2j.css';
import '../../css/x/x8z4k_bji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uw6indbog"/><path class="xvqdltb2j"/><path class="x8z4k_bji"/></g>`,
		"fallback": "solar:lightbulb-broken",
	});
}

export default Component;

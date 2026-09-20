import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ayg-pzboh.css';
import '../../css/w/w6581k_qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ayg-pzboh"/><path class="w6581k_qn"/></g>`,
		"fallback": "solar:smart-speaker-2-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aahgoh0mn.css';
import '../../css/r/r_k-6xaei.css';
import '../../css/w/wruzqvbcf.css';
import '../../css/w/w8fcmcc3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aahgoh0mn"/><path class="r_k-6xaei"/><path class="wruzqvbcf"/><path class="w8fcmcc3c"/></g>`,
		"fallback": "solar:station-minimalistic-linear",
	});
}

export default Component;

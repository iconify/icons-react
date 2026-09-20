import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aahgoh0mn.css';
import '../../css/a/av8z7db_k.css';
import '../../css/m/m9-c31byc.css';
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
		"content": `<g class="ipq1z-bjh"><path class="aahgoh0mn"/><path class="av8z7db_k"/><path class="m9-c31byc"/><path class="wruzqvbcf"/><path class="w8fcmcc3c"/></g>`,
		"fallback": "solar:station-minimalistic-line-duotone",
	});
}

export default Component;

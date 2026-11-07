import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iy-deskju.css';
import '../../css/w/weljqzbjy.css';
import '../../css/u/uuvldhb1y.css';
import '../../css/q/qofmvfb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iy-deskju"/><path class="weljqzbjy"/><path class="uuvldhb1y"/><path class="qofmvfb4y"/></g>`,
		"fallback": "solar:reorder-2-broken",
	});
}

export default Component;

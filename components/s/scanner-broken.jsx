import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vdsubobiu.css';
import '../../css/i/ijwbgek4s.css';
import '../../css/q/q9pwgx9_k.css';
import '../../css/w/w1fn0ab-e.css';
import '../../css/h/h60l1mbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vdsubobiu"/><path class="ijwbgek4s"/><path class="q9pwgx9_k"/><path class="w1fn0ab-e"/><path class="h60l1mbyb"/></g>`,
		"fallback": "solar:scanner-broken",
	});
}

export default Component;

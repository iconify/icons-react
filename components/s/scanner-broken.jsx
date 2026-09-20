import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pckaxha-v.css';
import '../../css/i/ijwbgek4s.css';
import '../../css/y/y_s7vvbss.css';
import '../../css/w/w1fn0ab-e.css';
import '../../css/q/q-ve4mbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pckaxha-v"/><path class="ijwbgek4s"/><path class="y_s7vvbss"/><path class="w1fn0ab-e"/><path class="q-ve4mbnt"/></g>`,
		"fallback": "solar:scanner-broken",
	});
}

export default Component;

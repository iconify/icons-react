import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e_71410md.css';
import '../../css/q/qy44fxbnk.css';
import '../../css/t/trwxrbbld.css';
import '../../css/n/ny_y9qmnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e_71410md"/><path class="qy44fxbnk"/><path class="trwxrbbld"/><path class="ny_y9qmnt"/></g>`,
		"fallback": "solar:phone-calling-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4qyhkj1t.css';
import '../../css/r/rul6n5bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w4qyhkj1t"/><path class="rul6n5bkg"/></g>`,
		"fallback": "solar:ruler-cross-pen-broken",
	});
}

export default Component;

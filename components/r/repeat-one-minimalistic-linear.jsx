import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-9qosbks.css';
import '../../css/e/en4uxwqna.css';
import '../../css/e/e1y9aqblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-9qosbks"/><path class="en4uxwqna"/><path class="e1y9aqblm"/></g>`,
		"fallback": "solar:repeat-one-minimalistic-linear",
	});
}

export default Component;

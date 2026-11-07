import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v533kab1g.css';
import '../../css/o/omaw8j64h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v533kab1g"/><path class="omaw8j64h"/></g>`,
		"fallback": "solar:pin-broken",
	});
}

export default Component;

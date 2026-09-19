import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y2rdnebwr.css';
import '../../css/u/u0_7cr62h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y2rdnebwr"/><path class="u0_7cr62h"/></g>`,
		"fallback": "hugeicons:tablet-connected-wifi",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y9ivn_z4s.css';
import '../../css/v/v312b25vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y9ivn_z4s"/><path class="v312b25vn"/></g>`,
		"fallback": "hugeicons:swipe-right-08",
	});
}

export default Component;

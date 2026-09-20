import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/irz3libwc.css';
import '../../css/p/p9u0eeb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="irz3libwc"/><path class="p9u0eeb3j"/></g>`,
		"fallback": "solar:map-point-remove-broken",
	});
}

export default Component;

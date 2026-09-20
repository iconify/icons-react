import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ej_5n-b7k.css';
import '../../css/s/s17kxubxz.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ej_5n-b7k"/><path class="s17kxubxz"/><circle class="u00ey8bps"/></g>`,
		"fallback": "solar:letter-unread-broken",
	});
}

export default Component;

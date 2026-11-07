import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pzchgt01j.css';
import '../../css/a/ahe6xhbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pzchgt01j"/><path class="ahe6xhbjr"/></g>`,
		"fallback": "solar:loader-broken",
	});
}

export default Component;

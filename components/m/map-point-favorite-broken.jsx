import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p9u0eeb3j.css';
import '../../css/f/f1rdj44hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p9u0eeb3j"/><path class="f1rdj44hr"/></g>`,
		"fallback": "solar:map-point-favorite-broken",
	});
}

export default Component;

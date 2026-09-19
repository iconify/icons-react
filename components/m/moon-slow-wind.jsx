import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d2f6h8btw.css';
import '../../css/c/cr1ho4bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d2f6h8btw"/><path class="cr1ho4bdu"/></g>`,
		"fallback": "hugeicons:moon-slow-wind",
	});
}

export default Component;

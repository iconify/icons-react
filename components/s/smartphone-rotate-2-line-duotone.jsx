import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tid3y7ujw.css';
import '../../css/w/wljjiqjly.css';
import '../../css/i/i5_aqn80p.css';
import '../../css/h/hal8f3bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tid3y7ujw"/><path class="wljjiqjly"/><path class="i5_aqn80p"/><path class="hal8f3bya"/></g>`,
		"fallback": "solar:smartphone-rotate-2-line-duotone",
	});
}

export default Component;

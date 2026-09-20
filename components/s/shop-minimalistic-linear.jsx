import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iktc6lbdf.css';
import '../../css/f/f0gjgkb7s.css';
import '../../css/k/k5axyabbr.css';
import '../../css/e/eq-y86bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iktc6lbdf"/><path class="f0gjgkb7s"/><path class="k5axyabbr"/><path class="eq-y86bpl"/></g>`,
		"fallback": "solar:shop-minimalistic-linear",
	});
}

export default Component;

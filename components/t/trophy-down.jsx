import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpx6cvtmg.css';
import '../../css/k/knuyjfb2y.css';
import '../../css/e/eqnm_1bow.css';
import '../../css/t/ty2xx-l4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cpx6cvtmg"/><path class="knuyjfb2y"/><path class="eqnm_1bow"/><path class="ty2xx-l4j"/></g>`,
		"fallback": "mage:trophy-down",
	});
}

export default Component;

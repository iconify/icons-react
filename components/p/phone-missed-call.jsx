import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnu_vbc4z.css';
import '../../css/p/pj1n6paza.css';
import '../../css/w/w95ndgbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnu_vbc4z"/><path class="pj1n6paza"/><path class="w95ndgbav"/></g>`,
		"fallback": "mage:phone-missed-call",
	});
}

export default Component;

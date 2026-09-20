import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pftkz0z8c.css';
import '../../css/v/vjgfrpbtc.css';
import '../../css/i/ilo4x8b6d.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mehba9vbc.css';
import '../../css/e/e6nbv9jee.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pftkz0z8c"/><path class="vjgfrpbtc"/><path class="ilo4x8b6d"/><g class="brzn_0bpr"><path class="mehba9vbc"/><path class="e6nbv9jee"/></g>`,
		"fallback": "openmoji:square-with-right-half-black",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e2irt0b7x.css';
import '../../css/i/ihw3qzrvl.css';
import '../../css/p/pkn-bebts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e2irt0b7x"/><path class="ihw3qzrvl"/><path class="pkn-bebts"/></g>`,
		"fallback": "hugeicons:tsunami",
	});
}

export default Component;

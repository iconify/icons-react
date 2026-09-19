import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e38xs_bqv.css';
import '../../css/w/w4r2ucbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e38xs_bqv"/><path class="w4r2ucbpy"/></g>`,
		"fallback": "hugeicons:sunrise",
	});
}

export default Component;

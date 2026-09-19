import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l1hc1vbvv.css';
import '../../css/w/w4r2ucbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l1hc1vbvv"/><path class="w4r2ucbpy"/></g>`,
		"fallback": "hugeicons:sunset",
	});
}

export default Component;

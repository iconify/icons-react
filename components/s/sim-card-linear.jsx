import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cfukg-luk.css';
import '../../css/k/k0k2z8awb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cfukg-luk"/><path class="k0k2z8awb"/></g>`,
		"fallback": "solar:sim-card-linear",
	});
}

export default Component;

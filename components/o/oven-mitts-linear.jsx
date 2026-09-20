import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l-7ci-bcn.css';
import '../../css/m/mby1w8bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l-7ci-bcn"/><path class="mby1w8bvg"/></g>`,
		"fallback": "solar:oven-mitts-linear",
	});
}

export default Component;

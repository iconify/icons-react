import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x8kz1ac3p.css';
import '../../css/g/g19uql6wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x8kz1ac3p"/><path class="g19uql6wy"/></g>`,
		"fallback": "hugeicons:leaf-04",
	});
}

export default Component;

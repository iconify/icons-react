import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mu6gvu5iy.css';
import '../../css/k/k-hxx4vnx.css';
import '../../css/d/dt7ysyxnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mu6gvu5iy"/><path class="k-hxx4vnx"/><path class="dt7ysyxnd"/></g>`,
		"fallback": "hugeicons:mobile-security",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o3i3x6yxl.css';
import '../../css/v/vsy_54beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o3i3x6yxl"/><path class="vsy_54beb"/></g>`,
		"fallback": "hugeicons:sin",
	});
}

export default Component;

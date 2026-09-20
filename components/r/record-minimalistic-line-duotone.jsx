import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dwpy4-bec.css';
import '../../css/e/es5c5ho5q.css';
import '../../css/k/krdzqfbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dwpy4-bec"/><path class="es5c5ho5q"/><path class="krdzqfbse"/></g>`,
		"fallback": "solar:record-minimalistic-line-duotone",
	});
}

export default Component;

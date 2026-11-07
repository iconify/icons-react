import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y96rgsz7j.css';
import '../../css/y/yxe6egzsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y96rgsz7j"/><path class="yxe6egzsc"/></g>`,
		"fallback": "solar:text-bold-linear",
	});
}

export default Component;

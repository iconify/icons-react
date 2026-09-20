import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bewqfdccc.css';
import '../../css/z/z-3-7paba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bewqfdccc"/><path class="z-3-7paba"/></g>`,
		"fallback": "solar:mention-circle-linear",
	});
}

export default Component;

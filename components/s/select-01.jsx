import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/myveg8mxr.css';
import '../../css/b/be4dhbv5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="myveg8mxr"/><path class="be4dhbv5j"/></g>`,
		"fallback": "hugeicons:select-01",
	});
}

export default Component;

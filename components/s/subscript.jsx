import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oh4g_7v1y.css';
import '../../css/q/qi-x3mb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oh4g_7v1y"/><path class="qi-x3mb1i"/></g>`,
		"fallback": "hugeicons:subscript",
	});
}

export default Component;

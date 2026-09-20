import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zqfwrhbca.css';
import '../../css/k/ki9dw1zqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zqfwrhbca"/><path class="ki9dw1zqs"/></g>`,
		"fallback": "solar:temperature-line-duotone",
	});
}

export default Component;

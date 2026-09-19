import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yxd3vebvy.css';
import '../../css/a/a6_1ibctv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yxd3vebvy"/><path class="a6_1ibctv"/></g>`,
		"fallback": "hugeicons:list-minus",
	});
}

export default Component;

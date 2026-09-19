import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kdw-60bcj.css';
import '../../css/q/qgw9asb_i.css';
import '../../css/i/i0zlx3npb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kdw-60bcj"/><path class="qgw9asb_i"/><path class="i0zlx3npb"/></g>`,
		"fallback": "hugeicons:text-subscript",
	});
}

export default Component;

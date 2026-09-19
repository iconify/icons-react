import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g33dr_b1f.css';
import '../../css/n/n2ckldr-l.css';
import '../../css/d/dlvig_bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g33dr_b1f"/><path class="n2ckldr-l"/><path class="dlvig_bmn"/></g>`,
		"fallback": "hugeicons:rubber-duck",
	});
}

export default Component;

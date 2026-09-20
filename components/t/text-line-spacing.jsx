import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iygwf-bmn.css';
import '../../css/l/l_saarbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iygwf-bmn"/><path class="l_saarbkj"/></g>`,
		"fallback": "proicons:text-line-spacing",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jv2_h6bjf.css';
import '../../css/f/f8yqsxb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jv2_h6bjf"/><circle transform="matrix(0 1 1 0 9 2)" class="f8yqsxb0s"/></g>`,
		"fallback": "hugeicons:move-bottom",
	});
}

export default Component;

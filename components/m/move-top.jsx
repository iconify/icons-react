import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f8yqsxb0s.css';
import '../../css/s/syhyksbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle transform="matrix(0 -1 -1 0 15 22)" class="f8yqsxb0s"/><path class="syhyksbpp"/></g>`,
		"fallback": "hugeicons:move-top",
	});
}

export default Component;

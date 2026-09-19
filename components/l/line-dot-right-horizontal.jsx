import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/isclbpbxt.css';
import '../../css/b/bz8qefuqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="isclbpbxt"/><path class="bz8qefuqv"/></g>`,
		"fallback": "hugeicons:line-dot-right-horizontal",
	});
}

export default Component;

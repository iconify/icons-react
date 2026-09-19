import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xks785bjg.css';
import '../../css/p/pjmblnzxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xks785bjg"/><path class="pjmblnzxm"/></g>`,
		"fallback": "hugeicons:map-pin-minus-inside",
	});
}

export default Component;

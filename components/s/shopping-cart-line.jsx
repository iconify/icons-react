import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rggt-cc5h.css';
import '../../css/z/zxnpu1bvo.css';
import '../../css/l/lqeh9j7ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rggt-cc5h"/><circle class="zxnpu1bvo"/><circle class="lqeh9j7ag"/></g>`,
		"fallback": "majesticons:shopping-cart-line",
	});
}

export default Component;

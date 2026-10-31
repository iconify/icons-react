import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g2-xhacyx.css';
import '../../css/r/rgs3ap-_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g2-xhacyx wm-k"/><path class="rgs3ap-_b wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-gloss",
	});
}

export default Component;

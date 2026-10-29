import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ocnol1b_l.css';
import '../../css/j/jjoj11miz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ocnol1b_l"/><path class="jjoj11miz wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-plus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzbq4-b0s.css';
import '../../css/w/ww85m-21c.css';
import '../../css/a/apviizbjs.css';
import '../../css/o/ocnol1b_l.css';
import '../../css/e/e7ft8bcmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tzbq4-b0s"/><path class="wm-a ww85m-21c"/><path class="apviizbjs wm-a"/><path class="ocnol1b_l"/><path class="e7ft8bcmq wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-plus-duo",
	});
}

export default Component;

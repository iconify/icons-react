import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yw0pq6b4t.css';
import '../../css/y/y7v_eh63r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yw0pq6b4t"/><path class="y7v_eh63r"/></g>`,
		"fallback": "streamline-flex-color:shopping-cart-2-flat",
	});
}

export default Component;

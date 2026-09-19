import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/caaopxbqh.css';
import '../../css/y/y0rijtbja.css';
import '../../css/k/kqva0-m9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="caaopxbqh"/><circle class="y0rijtbja"/><circle class="kqva0-m9f"/></g>`,
		"fallback": "icon-park-solid:shopping-cart-two",
	});
}

export default Component;

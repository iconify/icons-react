import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z17pesb7r.css';
import '../../css/t/tq-dgfbkl.css';
import '../../css/y/yw0nv8rst.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="z17pesb7r"/><circle class="tq-dgfbkl"/><path class="yw0nv8rst"/></g>`,
		"fallback": "icon-park-outline:shopping-cart-one",
	});
}

export default Component;

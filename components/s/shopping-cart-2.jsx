import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lieezdsow.css';
import '../../css/e/eog9bk_lv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lieezdsow"/><path class="eog9bk_lv"/></g>`,
		"fallback": "streamline-color:shopping-cart-2",
	});
}

export default Component;

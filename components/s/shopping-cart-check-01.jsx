import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kx8v89bdy.css';
import '../../css/e/eskygmzuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kx8v89bdy"/><path class="eskygmzuv"/></g>`,
		"fallback": "hugeicons:shopping-cart-check-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d4qwihg_t.css';
import '../../css/t/t-i6h4yjv.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="d4qwihg_t"/><path class="t-i6h4yjv"/><path class="czbbm17fv"/></g>`,
		"fallback": "keyline-icons:shopping-cart-fill",
	});
}

export default Component;

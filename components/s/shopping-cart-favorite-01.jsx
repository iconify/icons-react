import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/heba8yb5l.css';
import '../../css/h/h3kucfr5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="heba8yb5l"/><path class="h3kucfr5r"/></g>`,
		"fallback": "hugeicons:shopping-cart-favorite-01",
	});
}

export default Component;

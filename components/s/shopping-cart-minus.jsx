import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tys48-i6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tys48-i6t"/>`,
		"fallback": "mdi:shopping-cart-minus",
	});
}

export default Component;

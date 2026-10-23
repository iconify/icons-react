import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z20gk7b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z20gk7b7r"/>`,
		"fallback": "vadivam:shopping-cart-minus",
	});
}

export default Component;

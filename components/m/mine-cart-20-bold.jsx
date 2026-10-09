import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocf3ptrqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocf3ptrqc"/>`,
		"fallback": "energy-icons:mine-cart-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl3m84wvd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl3m84wvd"/>`,
		"fallback": "energy-icons:shopping-cart-20",
	});
}

export default Component;

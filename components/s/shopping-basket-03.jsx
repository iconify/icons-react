import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f78d57bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f78d57bsq"/>`,
		"fallback": "hugeicons:shopping-basket-03",
	});
}

export default Component;

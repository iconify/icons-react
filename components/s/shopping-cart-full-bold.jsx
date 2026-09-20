import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpm6mobiy.css';
import '../../css/c/cuklhhb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpm6mobiy"/><path class="cuklhhb4d"/>`,
		"fallback": "streamline-ultimate:shopping-cart-full-bold",
	});
}

export default Component;

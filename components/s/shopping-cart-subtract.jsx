import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_ewsowrq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_ewsowrq"/>`,
		"fallback": "streamline:shopping-cart-subtract",
	});
}

export default Component;

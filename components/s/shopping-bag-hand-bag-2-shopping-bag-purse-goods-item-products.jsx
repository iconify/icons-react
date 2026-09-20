import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0rev_bok.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0rev_bok"/>`,
		"fallback": "streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products",
	});
}

export default Component;

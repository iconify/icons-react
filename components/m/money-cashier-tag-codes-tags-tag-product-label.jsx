import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azafrgb3o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azafrgb3o"/>`,
		"fallback": "streamline:money-cashier-tag-codes-tags-tag-product-label",
	});
}

export default Component;

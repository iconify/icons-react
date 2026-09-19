import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y50eh9b8m.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y50eh9b8m"/>`,
		"fallback": "whh:shoppingcart",
	});
}

export default Component;

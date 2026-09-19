import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aycs3t8th.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aycs3t8th"/>`,
		"fallback": "fluent-mdl2:shopping-cart-solid",
	});
}

export default Component;

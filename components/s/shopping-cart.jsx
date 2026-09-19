import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f92pdl4pl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f92pdl4pl"/>`,
		"fallback": "fluent-mdl2:shopping-cart",
	});
}

export default Component;

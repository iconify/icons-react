import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6gtys2su.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6gtys2su"/>`,
		"fallback": "fa:paypal",
	});
}

export default Component;

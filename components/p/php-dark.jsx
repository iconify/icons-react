import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0igmmbcs.css';

const viewBox = {"width":100,"height":50,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0igmmbcs"/>`,
		"fallback": "thesvg-color:php-dark",
	});
}

export default Component;

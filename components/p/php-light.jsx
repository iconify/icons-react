import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj2vy9b2u.css';

const viewBox = {"width":100,"height":50,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj2vy9b2u"/>`,
		"fallback": "thesvg-color:php-light",
	});
}

export default Component;

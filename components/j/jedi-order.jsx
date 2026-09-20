import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0-3p01nj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0-3p01nj"/>`,
		"fallback": "la:jedi-order",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3y6igytu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3y6igytu"/>`,
		"fallback": "la:superpowers",
	});
}

export default Component;

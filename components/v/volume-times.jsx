import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy99ozzcb.css';

const viewBox = {"width":1824,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy99ozzcb"/>`,
		"fallback": "vs:volume-times",
	});
}

export default Component;

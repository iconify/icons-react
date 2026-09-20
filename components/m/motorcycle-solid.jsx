import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w03_zbzhb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w03_zbzhb"/>`,
		"fallback": "la:motorcycle-solid",
	});
}

export default Component;

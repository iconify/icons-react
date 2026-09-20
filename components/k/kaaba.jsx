import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf4--fboj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf4--fboj"/>`,
		"fallback": "la:kaaba",
	});
}

export default Component;

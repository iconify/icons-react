import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_lt3l0cw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_lt3l0cw"/>`,
		"fallback": "la:vnv",
	});
}

export default Component;

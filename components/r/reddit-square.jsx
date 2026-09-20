import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asprg8bfw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asprg8bfw"/>`,
		"fallback": "la:reddit-square",
	});
}

export default Component;

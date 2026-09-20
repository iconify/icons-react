import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3o8y58fa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3o8y58fa"/>`,
		"fallback": "la:markdown",
	});
}

export default Component;

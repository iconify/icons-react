import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8bvzkb2i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8bvzkb2i"/>`,
		"fallback": "pullo:stack-simple-check-light",
	});
}

export default Component;

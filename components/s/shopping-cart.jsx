import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5n_y-bat.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5n_y-bat"/>`,
		"fallback": "heroicons-solid:shopping-cart",
	});
}

export default Component;

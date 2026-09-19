import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo9o1ccjz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo9o1ccjz"/>`,
		"fallback": "carbon:reset-alt",
	});
}

export default Component;

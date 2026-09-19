import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8lzn6bab.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8lzn6bab"/>`,
		"fallback": "zmdi:tablet",
	});
}

export default Component;

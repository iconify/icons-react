import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5wuqj8_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5wuqj8_i"/>`,
		"fallback": "la:redo",
	});
}

export default Component;

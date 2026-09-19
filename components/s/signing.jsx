import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7oy01okz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7oy01okz"/>`,
		"fallback": "fa7-solid:signing",
	});
}

export default Component;

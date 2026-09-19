import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ij-6bcu.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ij-6bcu"/>`,
		"fallback": "fa-solid:long-arrow-alt-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuq4lib0u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuq4lib0u"/>`,
		"fallback": "carbon:text-color",
	});
}

export default Component;

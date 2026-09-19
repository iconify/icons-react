import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f26vo10au.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f26vo10au"/>`,
		"fallback": "carbon:text-all-caps",
	});
}

export default Component;

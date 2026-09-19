import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe37jgblf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe37jgblf"/>`,
		"fallback": "carbon:text-underline",
	});
}

export default Component;

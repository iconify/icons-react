import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j01bfxbjr.css';

const viewBox = {"width":642,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j01bfxbjr"/>`,
		"fallback": "whh:pyrocms",
	});
}

export default Component;

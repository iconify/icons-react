import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdkz9obms.css';
import '../../css/j/j0ekucb9i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rdkz9obms"/><path class="j0ekucb9i"/></g>`,
		"fallback": "bi:moon-stars-fill",
	});
}

export default Component;

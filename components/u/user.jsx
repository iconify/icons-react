import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4eio9bdz.css';
import '../../css/j/j4xpq6z4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4eio9bdz"/><path class="j4xpq6z4k"/>`,
		"fallback": "withicons-bauhaus:user",
	});
}

export default Component;

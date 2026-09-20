import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u99kuibgz.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u99kuibgz"/>`,
		"fallback": "wi:moon-alt-first-quarter",
	});
}

export default Component;

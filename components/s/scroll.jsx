import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8j21qb8m.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8j21qb8m"/>`,
		"fallback": "fa-solid:scroll",
	});
}

export default Component;

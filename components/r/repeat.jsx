import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te04s0bgi.css';

const viewBox = {"width":666,"height":733};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te04s0bgi"/>`,
		"fallback": "ls:repeat",
	});
}

export default Component;

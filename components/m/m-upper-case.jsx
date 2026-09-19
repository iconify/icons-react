import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1dcbxwrn.css';

const viewBox = {"width":620,"height":753};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1dcbxwrn"/>`,
		"fallback": "ls:m-upper-case",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwhzqxb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jwhzqxb3b"/>`,
		"fallback": "lets-icons:sign-in-squre-fill",
	});
}

export default Component;

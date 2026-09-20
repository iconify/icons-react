import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiiiy52kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiiiy52kr"/>`,
		"fallback": "simple-icons:librariesdotio",
	});
}

export default Component;

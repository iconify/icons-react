import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj6a17ihb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tj6a17ihb"/>`,
		"fallback": "streamline-color:ladder-flat",
	});
}

export default Component;

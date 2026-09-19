import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhevjkbap.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhevjkbap"/>`,
		"fallback": "whh:stickynote",
	});
}

export default Component;

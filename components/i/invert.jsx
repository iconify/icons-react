import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_8j1tbxn.css';

const viewBox = {"width":768,"height":646};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_8j1tbxn"/>`,
		"fallback": "ls:invert",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7kqcoj9e.css';

const viewBox = {"width":666,"height":653};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7kqcoj9e"/>`,
		"fallback": "ls:menu",
	});
}

export default Component;

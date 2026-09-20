import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3k4mxcjl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3k4mxcjl"/>`,
		"fallback": "lsicon:left-square-outline",
	});
}

export default Component;

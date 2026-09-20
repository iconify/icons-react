import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2d7aoyzr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2d7aoyzr"/>`,
		"fallback": "octicon:note-16",
	});
}

export default Component;

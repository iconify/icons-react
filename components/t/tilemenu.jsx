import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5mwqbc4z.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5mwqbc4z"/>`,
		"fallback": "ls:tilemenu",
	});
}

export default Component;

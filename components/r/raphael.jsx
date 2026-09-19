import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc5q4acph.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc5q4acph"/>`,
		"fallback": "whh:raphael",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5pdp9b8q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5pdp9b8q"/>`,
		"fallback": "fa7-solid:paper-plane",
	});
}

export default Component;

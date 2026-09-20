import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs-u90x8q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs-u90x8q"/>`,
		"fallback": "picon:pen",
	});
}

export default Component;

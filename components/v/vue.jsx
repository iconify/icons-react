import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1m2x9bvi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1m2x9bvi"/>`,
		"fallback": "picon:vue",
	});
}

export default Component;

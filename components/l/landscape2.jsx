import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vur7jkzgn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vur7jkzgn"/>`,
		"fallback": "raphael:landscape2",
	});
}

export default Component;

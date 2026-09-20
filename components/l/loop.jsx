import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7pgfbc9k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7pgfbc9k"/>`,
		"fallback": "simple-line-icons:loop",
	});
}

export default Component;

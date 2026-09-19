import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiexoyv5t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiexoyv5t"/>`,
		"fallback": "fa7-solid:user-shield",
	});
}

export default Component;

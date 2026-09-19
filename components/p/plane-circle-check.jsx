import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0c2khzel.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0c2khzel"/>`,
		"fallback": "fa7-solid:plane-circle-check",
	});
}

export default Component;

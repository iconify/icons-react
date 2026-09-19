import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7gd7dfck.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7gd7dfck"/>`,
		"fallback": "fa7-solid:pen-to-square",
	});
}

export default Component;

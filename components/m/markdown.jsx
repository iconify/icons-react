import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twl58k00n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twl58k00n"/>`,
		"fallback": "carbon:markdown",
	});
}

export default Component;

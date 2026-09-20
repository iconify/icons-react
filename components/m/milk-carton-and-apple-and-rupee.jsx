import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e81d7qbqn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e81d7qbqn"/>`,
		"fallback": "pinhead:milk-carton-and-apple-and-rupee",
	});
}

export default Component;

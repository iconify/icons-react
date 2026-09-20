import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1dxw3t5q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1dxw3t5q"/>`,
		"fallback": "pinhead:milk-carton-and-apple-and-ruble",
	});
}

export default Component;

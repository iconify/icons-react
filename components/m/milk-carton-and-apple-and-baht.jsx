import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k92n0kq6r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k92n0kq6r"/>`,
		"fallback": "pinhead:milk-carton-and-apple-and-baht",
	});
}

export default Component;

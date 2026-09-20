import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdt9a3kty.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdt9a3kty"/>`,
		"fallback": "pinhead:milk-carton-and-apple-and-yen-yuan",
	});
}

export default Component;

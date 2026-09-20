import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyu5frbjg.css';
import '../../css/z/zt0uakzko.css';

const viewBox = {"width":800,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyu5frbjg"/><path class="zt0uakzko"/>`,
		"fallback": "thesvg-color:pi",
	});
}

export default Component;

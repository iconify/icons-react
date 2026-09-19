import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2715i-o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex2715i-o"/>`,
		"fallback": "game-icons:sleeping-bag",
	});
}

export default Component;

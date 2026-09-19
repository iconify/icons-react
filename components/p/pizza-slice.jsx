import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxcoe3bsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxcoe3bsa"/>`,
		"fallback": "game-icons:pizza-slice",
	});
}

export default Component;

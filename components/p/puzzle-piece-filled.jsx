import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfvc8y0xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfvc8y0xh"/>`,
		"fallback": "reicon:puzzle-piece-filled",
	});
}

export default Component;

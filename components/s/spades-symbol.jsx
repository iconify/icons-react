import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-c0ls6qa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-c0ls6qa"/>`,
		"fallback": "streamline:spades-symbol",
	});
}

export default Component;

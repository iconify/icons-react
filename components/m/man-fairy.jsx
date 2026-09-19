import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk29fwbvg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk29fwbvg"/>`,
		"fallback": "fluent-emoji-high-contrast:man-fairy",
	});
}

export default Component;

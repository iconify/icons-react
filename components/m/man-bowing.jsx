import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxgj7nbnu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxgj7nbnu"/>`,
		"fallback": "fluent-emoji-high-contrast:man-bowing",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve1v3g8oj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve1v3g8oj"/>`,
		"fallback": "fluent-emoji-high-contrast:straight-ruler",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5y4nsagy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5y4nsagy"/>`,
		"fallback": "fluent-mdl2:thunderstorms",
	});
}

export default Component;

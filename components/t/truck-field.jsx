import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f64a5abnf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f64a5abnf"/>`,
		"fallback": "fa7-solid:truck-field",
	});
}

export default Component;

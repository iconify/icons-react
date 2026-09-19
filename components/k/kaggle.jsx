import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3gqcf4nl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3gqcf4nl"/>`,
		"fallback": "fa7-brands:kaggle",
	});
}

export default Component;

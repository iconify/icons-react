import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9oq_pbzr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9oq_pbzr"/>`,
		"fallback": "icons8:shopping-cart",
	});
}

export default Component;

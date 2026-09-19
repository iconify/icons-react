import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl42_cssb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl42_cssb"/>`,
		"fallback": "at-icons:shopping-bag",
	});
}

export default Component;

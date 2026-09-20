import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9jl1r7rh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9jl1r7rh"/>`,
		"fallback": "lsicon:stamp-outline",
	});
}

export default Component;

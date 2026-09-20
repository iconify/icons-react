import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-4ez0gln.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-4ez0gln"/>`,
		"fallback": "lsicon:path-outline",
	});
}

export default Component;

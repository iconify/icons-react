import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y573tkaic.css';

const viewBox = {"width":527,"height":776};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y573tkaic"/>`,
		"fallback": "ls:n-upper-case",
	});
}

export default Component;

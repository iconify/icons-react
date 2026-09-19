import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-j4d-1pu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-j4d-1pu"/>`,
		"fallback": "codicon:search-sparkle",
	});
}

export default Component;

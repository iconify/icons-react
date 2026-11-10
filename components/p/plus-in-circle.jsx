import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy-3afbxr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vy-3afbxr"/>`,
		"fallback": "at-icons:plus-in-circle",
	});
}

export default Component;

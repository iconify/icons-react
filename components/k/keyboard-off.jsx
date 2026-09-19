import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxc5sxbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxc5sxbvh"/>`,
		"fallback": "griddy-icons:keyboard-off",
	});
}

export default Component;

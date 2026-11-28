import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbdhec4uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbdhec4uu"/>`,
		"fallback": "noviair-light:laptop-refresh",
	});
}

export default Component;

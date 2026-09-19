import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je36gvb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je36gvb4w"/>`,
		"fallback": "bx:last-page",
	});
}

export default Component;

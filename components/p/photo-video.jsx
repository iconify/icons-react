import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0dtgxbmp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0dtgxbmp"/>`,
		"fallback": "la:photo-video",
	});
}

export default Component;

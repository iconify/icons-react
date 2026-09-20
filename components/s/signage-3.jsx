import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_fj5p7dh.css';
import '../../css/a/a5v8wwbgl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_fj5p7dh"/><path class="a5v8wwbgl"/></g>`,
		"fallback": "streamline-color:signage-3",
	});
}

export default Component;

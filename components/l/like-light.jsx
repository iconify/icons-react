import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l32w0ibza.css';
import '../../css/w/w1l0dccqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l32w0ibza"/><path class="w1l0dccqk"/></g>`,
		"fallback": "iconamoon:like-light",
	});
}

export default Component;

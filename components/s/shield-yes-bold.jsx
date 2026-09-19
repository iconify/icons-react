import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4sd06b_x.css';
import '../../css/z/z15nw8b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j4sd06b_x"/><path class="z15nw8b4z"/></g>`,
		"fallback": "iconamoon:shield-yes-bold",
	});
}

export default Component;

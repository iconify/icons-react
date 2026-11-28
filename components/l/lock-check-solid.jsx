import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dda3qvb8d.css';
import '../../css/v/v_t9sff1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dda3qvb8d"/><path class="v_t9sff1z"/></g>`,
		"fallback": "iconaut:lock-check-solid",
	});
}

export default Component;

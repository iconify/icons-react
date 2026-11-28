import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ndalo0b6d.css';
import '../../css/v/v_t9sff1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ndalo0b6d"/><path class="v_t9sff1z"/></g>`,
		"fallback": "iconaut:lock-plus-solid",
	});
}

export default Component;

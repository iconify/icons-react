import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w20t6o6gy.css';
import '../../css/f/fz7oagbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w20t6o6gy"/><path class="fz7oagbeo primary"/></g>`,
		"fallback": "iconaut:tree-deciduous-duotone",
	});
}

export default Component;

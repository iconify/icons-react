import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/idsuhmmaw.css';
import '../../css/f/fz_rarbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="idsuhmmaw secondary"/><path class="fz_rarbie primary"/></g>`,
		"fallback": "iconaut:shelf-duotone",
	});
}

export default Component;

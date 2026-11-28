import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nuy2c20vh.css';
import '../../css/f/fh8km-y4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nuy2c20vh secondary"/><path class="fh8km-y4d primary"/></g>`,
		"fallback": "iconaut:soda-bottle-duotone",
	});
}

export default Component;

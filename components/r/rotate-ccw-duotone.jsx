import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fi1xmd8ds.css';
import '../../css/m/mn509bb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fi1xmd8ds secondary"/><path class="mn509bb1d primary"/></g>`,
		"fallback": "iconaut:rotate-ccw-duotone",
	});
}

export default Component;

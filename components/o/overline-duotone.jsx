import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ltby8qf4k.css';
import '../../css/e/e7hj72bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ltby8qf4k secondary"/><path class="e7hj72bfo primary"/></g>`,
		"fallback": "iconaut:overline-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r33tj4qjt.css';
import '../../css/c/ckvyjdx1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r33tj4qjt secondary"/><path class="ckvyjdx1z primary"/></g>`,
		"fallback": "iconaut:scan-check-duotone",
	});
}

export default Component;

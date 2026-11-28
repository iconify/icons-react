import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/injx4wb5a.css';
import '../../css/j/jzwf50r7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="injx4wb5a secondary"/><path class="jzwf50r7s primary"/></g>`,
		"fallback": "iconaut:text-search-duotone",
	});
}

export default Component;

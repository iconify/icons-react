import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y548mlb6i.css';
import '../../css/g/g2y8a0sos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary y548mlb6i"/><path class="g2y8a0sos primary"/></g>`,
		"fallback": "iconaut:list-filter-x-duotone",
	});
}

export default Component;

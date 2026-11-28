import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hicl_kb4g.css';
import '../../css/y/yv6accblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hicl_kb4g secondary"/><path class="primary yv6accblr"/></g>`,
		"fallback": "iconaut:lambda-duotone",
	});
}

export default Component;

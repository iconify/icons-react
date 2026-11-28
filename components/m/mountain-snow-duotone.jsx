import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj1cv_uub.css';
import '../../css/x/xbrqr2njq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nj1cv_uub secondary"/><path class="primary xbrqr2njq"/></g>`,
		"fallback": "iconaut:mountain-snow-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0s2lsbwv.css';
import '../../css/z/zrlb22koa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y0s2lsbwv"/><path class="zrlb22koa"/></g>`,
		"fallback": "lets-icons:size-down",
	});
}

export default Component;

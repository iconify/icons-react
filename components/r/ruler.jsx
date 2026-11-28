import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cu6lg7pxc.css';
import '../../css/t/tapbstm2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cu6lg7pxc"/><path class="tapbstm2w"/></g>`,
		"fallback": "iconaut:ruler",
	});
}

export default Component;

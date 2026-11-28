import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwhv02bjz.css';
import '../../css/i/iepbd_boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uwhv02bjz"/><path class="iepbd_boz primary"/></g>`,
		"fallback": "iconaut:italic-duotone",
	});
}

export default Component;

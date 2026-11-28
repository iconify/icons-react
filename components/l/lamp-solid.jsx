import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pprzsd6sx.css';
import '../../css/w/whkmx3bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pprzsd6sx"/><path class="whkmx3bhv"/></g>`,
		"fallback": "iconaut:lamp-solid",
	});
}

export default Component;

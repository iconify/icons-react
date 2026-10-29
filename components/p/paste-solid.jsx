import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w4s8cdckx.css';
import '../../css/z/zz12e3bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="w4s8cdckx"/><path class="wm-a zz12e3bot"/></g>`,
		"fallback": "withicons:paste-solid",
	});
}

export default Component;

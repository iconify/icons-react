import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yplnl1biz.css';
import '../../css/j/j-shekb6c.css';
import '../../css/v/vsyunqiht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yplnl1biz"/><path class="j-shekb6c"/><path clip-rule="evenodd" class="vsyunqiht"/></g>`,
		"fallback": "solar:minimize-square-3-outline",
	});
}

export default Component;

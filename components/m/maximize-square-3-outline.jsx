import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yplnl1biz.css';
import '../../css/b/bqjj3-b4v.css';
import '../../css/v/vsyunqiht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yplnl1biz"/><path class="bqjj3-b4v"/><path clip-rule="evenodd" class="vsyunqiht"/></g>`,
		"fallback": "solar:maximize-square-3-outline",
	});
}

export default Component;

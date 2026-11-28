import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lky_4_-9w.css';
import '../../css/j/jki7adbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lky_4_-9w secondary"/><path class="jki7adbua primary"/></g>`,
		"fallback": "iconaut:video-off-duotone",
	});
}

export default Component;

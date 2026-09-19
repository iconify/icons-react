import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkdkd-ctf.css';
import '../../css/f/f3pbnvbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wkdkd-ctf"/><path clip-rule="evenodd" class="f3pbnvbxx"/></g>`,
		"fallback": "gg:smartphone-ram",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yc932bcab.css';
import '../../css/s/se9tejz-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yc932bcab"/><path class="se9tejz-x"/></g>`,
		"fallback": "keyline-icons:send-horizontal-duotone",
	});
}

export default Component;

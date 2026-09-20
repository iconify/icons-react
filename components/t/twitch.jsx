import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbuecfbqn.css';
import '../../css/y/ylik4k7po.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lbuecfbqn"/><path class="ylik4k7po"/></g>`,
		"fallback": "jam:twitch",
	});
}

export default Component;

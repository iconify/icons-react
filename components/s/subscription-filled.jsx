import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qo7x6ubkp.css';
import '../../css/u/utunikbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qo7x6ubkp"/><path class="utunikbop"/></g>`,
		"fallback": "reicon:subscription-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tbx_0ehqn.css';
import '../../css/r/r3gix9sqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tbx_0ehqn"/><path class="r3gix9sqp"/></g>`,
		"fallback": "reicon:notif-remove",
	});
}

export default Component;

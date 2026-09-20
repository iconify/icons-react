import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-ct8tqwm.css';
import '../../css/v/vu0x9mbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r-ct8tqwm"/><path clip-rule="evenodd" class="vu0x9mbvp"/></g>`,
		"fallback": "reicon:message-dots",
	});
}

export default Component;

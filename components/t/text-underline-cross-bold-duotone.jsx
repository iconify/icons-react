import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/t/t7wl2l2ca.css';
import '../../css/r/rh4jo1b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="t7wl2l2ca"/><path class="rh4jo1b5o"/></g>`,
		"fallback": "solar:text-underline-cross-bold-duotone",
	});
}

export default Component;

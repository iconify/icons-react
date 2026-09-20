import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rx3ycfb7y.css';
import '../../css/f/f_yr6pkot.css';
import '../../css/j/jgsrqq08o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rx3ycfb7y"/><path clip-rule="evenodd" class="f_yr6pkot"/><path class="jgsrqq08o"/></g>`,
		"fallback": "solar:stretching-bold-duotone",
	});
}

export default Component;

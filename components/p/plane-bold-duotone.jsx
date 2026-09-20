import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/liq7okvan.css';
import '../../css/j/jbhednual.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="liq7okvan"/><path class="jbhednual"/></g>`,
		"fallback": "solar:plane-bold-duotone",
	});
}

export default Component;

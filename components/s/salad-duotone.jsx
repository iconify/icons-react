import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/er3z68bgd.css';
import '../../css/j/j7a1t5g9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="er3z68bgd secondary"/><path class="j7a1t5g9h primary"/></g>`,
		"fallback": "iconaut:salad-duotone",
	});
}

export default Component;

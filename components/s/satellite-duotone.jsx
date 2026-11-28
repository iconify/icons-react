import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j4i12lbdn.css';
import '../../css/k/ki0tldrpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j4i12lbdn secondary"/><path class="ki0tldrpg primary"/></g>`,
		"fallback": "iconaut:satellite-duotone",
	});
}

export default Component;

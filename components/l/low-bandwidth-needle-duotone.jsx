import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_a7e9bfr.css';
import '../../css/m/mtvc7cmli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e_a7e9bfr secondary"/><path class="mtvc7cmli primary"/></g>`,
		"fallback": "iconaut:low-bandwidth-needle-duotone",
	});
}

export default Component;

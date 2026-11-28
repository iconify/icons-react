import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hrcr8bkxv.css';
import '../../css/l/l5y2s7pmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hrcr8bkxv secondary"/><path class="l5y2s7pmm primary"/></g>`,
		"fallback": "iconaut:triangle-dot-duotone",
	});
}

export default Component;

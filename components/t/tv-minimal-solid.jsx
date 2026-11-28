import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwwcjib4z.css';
import '../../css/h/hhoe54_cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gwwcjib4z"/><path class="hhoe54_cc"/></g>`,
		"fallback": "iconaut:tv-minimal-solid",
	});
}

export default Component;

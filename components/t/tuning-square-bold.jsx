import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mb_m1r3fi.css';
import '../../css/v/vdylksbhi.css';
import '../../css/j/j9dgfb5fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mb_m1r3fi"/><path class="vdylksbhi"/><path clip-rule="evenodd" class="j9dgfb5fm"/></g>`,
		"fallback": "solar:tuning-square-bold",
	});
}

export default Component;

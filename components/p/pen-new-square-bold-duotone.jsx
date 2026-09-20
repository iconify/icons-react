import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ourocwb_f.css';
import '../../css/p/pa701kpad.css';
import '../../css/r/rxjiv1uzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ourocwb_f"/><path class="pa701kpad"/><path class="rxjiv1uzn"/></g>`,
		"fallback": "solar:pen-new-square-bold-duotone",
	});
}

export default Component;

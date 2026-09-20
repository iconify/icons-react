import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u654i1bhh.css';
import '../../css/r/r28egxbtw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 3)" class="bi12bsetm"><path class="u654i1bhh"/><circle class="r28egxbtw"/></g>`,
		"fallback": "system-uicons:tag",
	});
}

export default Component;

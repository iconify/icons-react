import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah42bqb-l.css';
import '../../css/q/q-xx5ioed.css';
import '../../css/u/uyw8ogbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ah42bqb-l"/><path class="q-xx5ioed"/><path class="uyw8ogbgs"/></g>`,
		"fallback": "andrsrxn:paint-board",
	});
}

export default Component;

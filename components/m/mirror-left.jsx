import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwbfulbnm.css';
import '../../css/v/vqxm-qijl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rwbfulbnm"/><path class="vqxm-qijl"/></g>`,
		"fallback": "andrsrxn:mirror-left",
	});
}

export default Component;

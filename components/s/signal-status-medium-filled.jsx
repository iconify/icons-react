import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5ppiqb-b.css';
import '../../css/z/zpy-i0syo.css';
import '../../css/i/im3r36nom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f5ppiqb-b"/><path clip-rule="evenodd" class="zpy-i0syo"/><path class="im3r36nom"/></g>`,
		"fallback": "andrsrxn:signal-status-medium-filled",
	});
}

export default Component;

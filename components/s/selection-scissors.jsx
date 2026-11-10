import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo30fwb8m.css';
import '../../css/z/zhyl_gbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fo30fwb8m"/><path class="zhyl_gbny"/></g>`,
		"fallback": "andrsrxn:selection-scissors",
	});
}

export default Component;

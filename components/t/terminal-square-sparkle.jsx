import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhyw7qxvp.css';
import '../../css/b/b0d-2nbym.css';
import '../../css/v/vaem5rbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhyw7qxvp"/><path class="b0d-2nbym"/><path class="vaem5rbyl"/></g>`,
		"fallback": "andrsrxn:terminal-square-sparkle",
	});
}

export default Component;

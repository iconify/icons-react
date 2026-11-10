import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4jkmzbjk.css';
import '../../css/z/z1cfwj81v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="l4jkmzbjk"/><path class="z1cfwj81v"/></g>`,
		"fallback": "andrsrxn:sun-off",
	});
}

export default Component;

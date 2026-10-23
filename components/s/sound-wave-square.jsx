import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/orllnt2lm.css';
import '../../css/p/pqfunnbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="orllnt2lm"/><path class="pqfunnbjh"/></g>`,
		"fallback": "andrsrxn:sound-wave-square",
	});
}

export default Component;

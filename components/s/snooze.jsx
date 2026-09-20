import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjecvcclv.css';
import '../../css/j/jp3p6tbxp.css';
import '../../css/e/efp046bes.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hjecvcclv"/><path class="jp3p6tbxp"/><path class="efp046bes"/></g>`,
		"fallback": "streamline-flex-color:snooze",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mz8vdhbwm.css';
import '../../css/t/t09fqbbpt.css';
import '../../css/j/jjmucv4qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mz8vdhbwm"/><path class="t09fqbbpt"/><path clip-rule="evenodd" class="jjmucv4qj"/></g>`,
		"fallback": "nrk:some-instagram",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-bnk7bok.css';
import '../../css/j/jzfn62btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f-bnk7bok"/><path class="jzfn62btm"/></g>`,
		"fallback": "si:monitor-stop-duotone",
	});
}

export default Component;

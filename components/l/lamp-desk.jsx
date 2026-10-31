import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v5ekabbtd.css';
import '../../css/e/eqknc-1gp.css';
import '../../css/q/qejtp6x8k.css';
import '../../css/t/tlh6wgnmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v5ekabbtd wm-shadow"/><path class="eqknc-1gp wm-shadow"/><path class="qejtp6x8k"/><path class="tlh6wgnmm"/></g>`,
		"fallback": "withicons-brutal:lamp-desk",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f_o9585tx.css';
import '../../css/z/z_leajngu.css';
import '../../css/j/j7ffi82vm.css';
import '../../css/n/nz03h8bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f_o9585tx"/><path class="wm-a z_leajngu"/><path class="j7ffi82vm"/><path class="nz03h8bkr wm-a"/></g>`,
		"fallback": "withicons:minimize-2-duo",
	});
}

export default Component;

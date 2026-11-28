import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puy9y75fu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i71m81irf.css';
import '../../css/d/didesjkug.css';
import '../../css/j/jb98xl5rn.css';
import '../../css/v/ve22t8bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puy9y75fu secondary"/><g class="dt0cm9dhy primary"><path class="i71m81irf"/><path class="didesjkug"/><path class="jb98xl5rn"/><path class="ve22t8bzo"/></g>`,
		"fallback": "iconaut:lock-keyhole-duo",
	});
}

export default Component;

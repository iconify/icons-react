import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/yrq22hj6w.css';
import '../../css/v/vb5ophb_l.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="yrq22hj6w"/><path class="vb5ophb_l"/></g>`,
		"fallback": "system-uicons:users",
	});
}

export default Component;

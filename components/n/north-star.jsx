import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exwrc0-ch.css';
import '../../css/s/s40yd4vsw.css';
import '../../css/m/mt5na0h5u.css';
import '../../css/l/l9ra1ma2i.css';
import '../../css/t/t3olyhrta.css';
import '../../css/t/tajnr1btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="exwrc0-ch"><path class="s40yd4vsw wm-shadow"/><path class="mt5na0h5u wm-shadow"/><path class="l9ra1ma2i wm-shadow"/><path class="t3olyhrta wm-a"/><path class="tajnr1btw wm-a"/></g>`,
		"fallback": "withicons-brutal:north-star",
	});
}

export default Component;

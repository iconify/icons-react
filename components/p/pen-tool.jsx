import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gsh6uhw9b.css';
import '../../css/c/c-mksob1y.css';
import '../../css/i/i933f1bro.css';
import '../../css/i/iusb6bcvc.css';
import '../../css/l/lc5ur3ytf.css';
import '../../css/k/kdg51kbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gsh6uhw9b wm-shadow"/><path class="c-mksob1y"/><path class="i933f1bro"/><path class="iusb6bcvc"/><path class="lc5ur3ytf"/><path class="kdg51kbfi"/></g>`,
		"fallback": "withicons-retro:pen-tool",
	});
}

export default Component;

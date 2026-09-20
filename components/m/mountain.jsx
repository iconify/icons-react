import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ver3u5bkf.css';
import '../../css/t/ta6kiz2pu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/m1jc5t6-l.css';
import '../../css/u/u1v6mx2du.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ver3u5bkf"/><path class="ta6kiz2pu"/><g class="ij2x_72vy"><path class="m1jc5t6-l"/><path class="u1v6mx2du"/></g>`,
		"fallback": "openmoji:mountain",
	});
}

export default Component;

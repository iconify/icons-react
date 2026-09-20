import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zz1s_3qhb.css';
import '../../css/c/cswrng7jb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="zz1s_3qhb"/><path class="cswrng7jb"/></g>`,
		"fallback": "openmoji:last-track-button",
	});
}

export default Component;

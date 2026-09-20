import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0-jx1bpp.css';
import '../../css/k/kx_1d-sfu.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/xecxklbhv.css';
import '../../css/x/xfdyl25bs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0-jx1bpp"/><path class="kx_1d-sfu"/><g class="ij2x_72vy"><circle class="xecxklbhv"/><path class="xfdyl25bs"/></g>`,
		"fallback": "openmoji:ring",
	});
}

export default Component;

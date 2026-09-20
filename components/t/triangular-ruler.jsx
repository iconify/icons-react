import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms2tx00vg.css';
import '../../css/s/spwjar0wa.css';
import '../../css/i/iy08machi.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/ygf9u2byt.css';
import '../../css/a/awj2oi9mo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms2tx00vg"/><path class="spwjar0wa"/><path class="iy08machi"/><g class="ij2x_72vy"><path class="ygf9u2byt"/><path class="awj2oi9mo"/></g>`,
		"fallback": "openmoji:triangular-ruler",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_ljy4b7o.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/r-s7y6bgr.css';
import '../../css/j/jmibpchcz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_ljy4b7o"/><g class="ij2x_72vy"><path class="r-s7y6bgr"/><path class="jmibpchcz"/></g>`,
		"fallback": "openmoji:page-facing-up",
	});
}

export default Component;

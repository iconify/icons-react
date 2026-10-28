import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/e/ee7_e7dxx.css';
import '../../css/r/rw1aaur7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="ee7_e7dxx"/><path clip-rule="evenodd" class="rw1aaur7o"/></g>`,
		"fallback": "andrsrxn:margins",
	});
}

export default Component;

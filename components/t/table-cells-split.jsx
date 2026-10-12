import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sq7qv2hlk.css';
import '../../css/a/ax75gabsj.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/q/qc-y5ubsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.24 3)" class="sq7qv2hlk"/><rect transform="rotate(90 21.24 15.1)" class="ax75gabsj"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="qc-y5ubsu"/></g>`,
		"fallback": "andrsrxn:table-cells-split",
	});
}

export default Component;

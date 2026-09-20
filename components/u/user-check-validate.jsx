import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oi_86pbvf.css';
import '../../css/v/vnka8dd3q.css';
import '../../css/e/e1he_ij6k.css';
import '../../css/c/cr_g8vbgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oi_86pbvf"/><path class="vnka8dd3q"/><path class="e1he_ij6k"/><path class="cr_g8vbgw"/></g>`,
		"fallback": "streamline-color:user-check-validate",
	});
}

export default Component;

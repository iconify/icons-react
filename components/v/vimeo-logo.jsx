import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_eq6_bdz.css';
import '../../css/d/dw0_qzbpt.css';
import '../../css/z/zrq_j3x2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_eq6_bdz"/><path class="dw0_qzbpt"/><path class="zrq_j3x2g"/></g>`,
		"fallback": "streamline-ultimate-color:vimeo-logo",
	});
}

export default Component;

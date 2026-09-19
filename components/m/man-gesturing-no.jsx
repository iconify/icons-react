import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xk6mm_bed.css';
import '../../css/g/gxcprm_mu.css';
import '../../css/i/i8dbu6blh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xk6mm_bed"/><path class="gxcprm_mu"/><path class="i8dbu6blh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-gesturing-no",
	});
}

export default Component;

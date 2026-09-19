import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub0p2rb4l.css';
import '../../css/n/nd_emezuh.css';
import '../../css/q/qznqlw_ir.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ub0p2rb4l"/><path class="nd_emezuh"/><path class="qznqlw_ir"/></g>`,
		"fallback": "bi:music-player",
	});
}

export default Component;

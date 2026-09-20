import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/y/yr6wppzyk.css';
import '../../css/l/l_q7w_bvs.css';
import '../../css/a/aik8ydacj.css';
import '../../css/m/mec27lbjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="yr6wppzyk"/><path class="l_q7w_bvs"/><path class="aik8ydacj"/><path class="mec27lbjd"/></g>`,
		"fallback": "streamline-kameleon-color:power",
	});
}

export default Component;

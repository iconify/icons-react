import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnms1mwhc.css';
import '../../css/q/qvrsviodu.css';
import '../../css/u/ug4k4k4bx.css';
import '../../css/j/jzf-3kzzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="bnms1mwhc"/><path class="qvrsviodu"/><path class="ug4k4k4bx"/><path class="jzf-3kzzy"/></g>`,
		"fallback": "andrsrxn:seek-backward-five-rtl",
	});
}

export default Component;

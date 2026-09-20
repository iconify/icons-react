import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ekp08ikgf.css';
import '../../css/k/kva043bzk.css';
import '../../css/j/jt_thrbns.css';
import '../../css/e/ed_y78b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ekp08ikgf"/><path class="kva043bzk"/><path class="jt_thrbns"/><path class="ed_y78b4e"/></g>`,
		"fallback": "solar:monitor-broken",
	});
}

export default Component;

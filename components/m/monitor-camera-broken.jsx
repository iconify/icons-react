import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgnixvbsf.css';
import '../../css/k/k99qzgiox.css';
import '../../css/k/kva043bzk.css';
import '../../css/j/jt_thrbns.css';
import '../../css/k/kuvu9bc5l.css';
import '../../css/e/ed_y78b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgnixvbsf"/><path class="k99qzgiox"/><path class="kva043bzk"/><path class="jt_thrbns"/><path class="kuvu9bc5l"/><path class="ed_y78b4e"/></g>`,
		"fallback": "solar:monitor-camera-broken",
	});
}

export default Component;

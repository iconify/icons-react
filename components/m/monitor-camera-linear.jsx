import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgnixvbsf.css';
import '../../css/k/k99qzgiox.css';
import '../../css/k/kva043bzk.css';
import '../../css/j/jt_thrbns.css';
import '../../css/m/m4zupzrqb.css';
import '../../css/w/wqwkkfban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgnixvbsf"/><path class="k99qzgiox"/><path class="kva043bzk"/><path class="jt_thrbns"/><path class="m4zupzrqb"/><path class="wqwkkfban"/></g>`,
		"fallback": "solar:monitor-camera-linear",
	});
}

export default Component;

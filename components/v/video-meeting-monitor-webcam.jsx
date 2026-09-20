import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kgadckbnn.css';
import '../../css/u/ubohdlb2a.css';
import '../../css/m/mpc5ei_xk.css';
import '../../css/n/njv83cbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kgadckbnn"/><path class="ubohdlb2a"/><path class="mpc5ei_xk"/><path class="njv83cbiy"/></g>`,
		"fallback": "streamline-freehand:video-meeting-monitor-webcam",
	});
}

export default Component;

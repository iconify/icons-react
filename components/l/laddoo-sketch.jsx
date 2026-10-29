import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sf9w4fbdp.css';
import '../../css/k/kx1xlobhp.css';
import '../../css/t/tf-bdq1-t.css';
import '../../css/x/xlofp7gdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sf9w4fbdp"/><path class="kx1xlobhp wm-a"/><path class="tf-bdq1-t wm-k"/><path class="wm-a xlofp7gdj"/></g>`,
		"fallback": "withicons:laddoo-sketch",
	});
}

export default Component;

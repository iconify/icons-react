import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g0i9lk7vr.css';
import '../../css/q/q7bmnwb4a.css';
import '../../css/x/x3dlulb2k.css';
import '../../css/l/l-m2svu3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g0i9lk7vr"/><path class="q7bmnwb4a wm-a"/><path class="wm-k x3dlulb2k"/><path class="l-m2svu3x wm-a"/></g>`,
		"fallback": "withicons:parking-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uw7bwsbpv.css';
import '../../css/i/i197gjbsm.css';
import '../../css/m/moutubcrf.css';
import '../../css/g/gvo8f0vqe.css';
import '../../css/q/q-08tmhlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uw7bwsbpv"/><path class="i197gjbsm"/><path class="moutubcrf"/><path class="gvo8f0vqe"/><path class="q-08tmhlv"/></g>`,
		"fallback": "iconaut:linkedin",
	});
}

export default Component;

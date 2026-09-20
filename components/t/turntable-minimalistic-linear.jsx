import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/r/r4lf3nb_v.css';
import '../../css/c/cm_p9_bxs.css';
import '../../css/w/wix0ambfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="r4lf3nb_v"/><path class="cm_p9_bxs"/><path class="wix0ambfv"/></g>`,
		"fallback": "solar:turntable-minimalistic-linear",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mc_ly-npi.css';
import '../../css/m/mrzjofi4h.css';
import '../../css/t/tp23o5cae.css';
import '../../css/t/t99xelbnc.css';
import '../../css/k/k4othtbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mc_ly-npi wm-k"/><path class="mrzjofi4h wm-a"/><path class="tp23o5cae wm-shadow"/><path class="t99xelbnc wm-k"/><path class="k4othtbmn wm-a"/></g>`,
		"fallback": "withicons:mail-open-engrave",
	});
}

export default Component;

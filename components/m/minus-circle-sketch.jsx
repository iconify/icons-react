import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/otbqr_zzw.css';
import '../../css/z/z-cabbcfr.css';
import '../../css/q/qcxu_iduf.css';
import '../../css/t/tt67h0p8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="otbqr_zzw wm-k"/><path class="wm-k z-cabbcfr"/><path class="qcxu_iduf wm-k"/><path class="tt67h0p8u wm-a"/></g>`,
		"fallback": "withicons:minus-circle-sketch",
	});
}

export default Component;

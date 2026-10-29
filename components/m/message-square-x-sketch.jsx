import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wg7a4s_lp.css';
import '../../css/l/l5w825gkl.css';
import '../../css/l/lvupdwkyr.css';
import '../../css/o/ozpysr2zi.css';
import '../../css/k/kzyt5fbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wg7a4s_lp"/><path class="l5w825gkl wm-k"/><path class="lvupdwkyr wm-a"/><path class="ozpysr2zi wm-k"/><path class="kzyt5fbtp wm-a"/></g>`,
		"fallback": "withicons:message-square-x-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s5q54hbds.css';
import '../../css/v/vqv71sbfv.css';
import '../../css/d/d4zzgtbcx.css';
import '../../css/m/mwx29-nua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s5q54hbds wm-k"/><path class="vqv71sbfv wm-a"/><path class="d4zzgtbcx wm-k"/><path class="mwx29-nua wm-a"/></g>`,
		"fallback": "withicons:underline-sketch",
	});
}

export default Component;

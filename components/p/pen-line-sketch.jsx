import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qvtmxxitk.css';
import '../../css/b/beg68_mea.css';
import '../../css/x/x-l9lm25o.css';
import '../../css/i/ieczbzx_k.css';
import '../../css/p/pk_0yebwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qvtmxxitk"/><path class="beg68_mea wm-k"/><path class="wm-a x-l9lm25o"/><path class="ieczbzx_k wm-k"/><path class="pk_0yebwm wm-a"/></g>`,
		"fallback": "withicons:pen-line-sketch",
	});
}

export default Component;

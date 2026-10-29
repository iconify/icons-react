import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q9t9x2f9r.css';
import '../../css/y/y8jl16c_k.css';
import '../../css/f/fmn_qacoy.css';
import '../../css/r/rzoychbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q9t9x2f9r wm-k"/><path class="wm-shadow y8jl16c_k"/><path class="fmn_qacoy wm-k"/><path class="rzoychbjy wm-a"/></g>`,
		"fallback": "withicons:ruler-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/enf_cwn5v.css';
import '../../css/i/i_obi8n6h.css';
import '../../css/c/cf9266bin.css';
import '../../css/o/oztr_bbxl.css';
import '../../css/c/c4bit6l7l.css';
import '../../css/m/mvmtu_3lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="enf_cwn5v wm-k"/><path class="i_obi8n6h wm-a"/><path class="cf9266bin wm-shadow"/><path class="oztr_bbxl wm-k"/><path class="c4bit6l7l wm-k"/><path class="mvmtu_3lg wm-a"/></g>`,
		"fallback": "withicons:tablet-engrave",
	});
}

export default Component;

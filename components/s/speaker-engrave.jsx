import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/olsfd0b0d.css';
import '../../css/r/rkxb5-bsz.css';
import '../../css/j/jh5_0cbif.css';
import '../../css/e/ehz_gxbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="olsfd0b0d wm-k"/><path class="rkxb5-bsz wm-shadow"/><path class="jh5_0cbif wm-k"/><path class="ehz_gxbyn wm-a"/></g>`,
		"fallback": "withicons:speaker-engrave",
	});
}

export default Component;

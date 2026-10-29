import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e51_17bqm.css';
import '../../css/y/y971-sbup.css';
import '../../css/s/smlm6-8mf.css';
import '../../css/k/kcbeidzug.css';
import '../../css/t/t_jrdsb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e51_17bqm wm-k"/><path class="wm-a y971-sbup"/><path class="smlm6-8mf wm-shadow"/><path class="kcbeidzug wm-k"/><path class="t_jrdsb4n wm-a"/></g>`,
		"fallback": "withicons:pipette-engrave",
	});
}

export default Component;

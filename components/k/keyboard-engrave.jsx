import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uw8k2ccxn.css';
import '../../css/n/naiqmubbw.css';
import '../../css/m/m2gtrdezm.css';
import '../../css/a/a_-f_rbjf.css';
import '../../css/n/n0-6-ccsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uw8k2ccxn wm-k"/><path class="naiqmubbw wm-k"/><path class="m2gtrdezm wm-shadow"/><path class="a_-f_rbjf wm-k"/><path class="n0-6-ccsd wm-a"/></g>`,
		"fallback": "withicons:keyboard-engrave",
	});
}

export default Component;

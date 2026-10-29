import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t2vdistiz.css';
import '../../css/k/k3qcgxbnp.css';
import '../../css/b/buxga7syi.css';
import '../../css/z/zm38tmb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t2vdistiz wm-k"/><path class="k3qcgxbnp wm-shadow"/><path class="buxga7syi wm-k"/><path class="wm-a zm38tmb2p"/></g>`,
		"fallback": "withicons:passport-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pjytr7bkn.css';
import '../../css/h/h8vo_l87w.css';
import '../../css/x/x-5rr3xtm.css';
import '../../css/t/tx2v7znqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pjytr7bkn"/><path class="h8vo_l87w wm-a"/><path class="wm-k x-5rr3xtm"/><path class="tx2v7znqn wm-a"/></g>`,
		"fallback": "withicons:sd-card-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hk5j4ubba.css';
import '../../css/d/difb_l_3t.css';
import '../../css/b/bxp-4qb3o.css';
import '../../css/e/eycan2bvo.css';
import '../../css/o/ox2v0n22b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hk5j4ubba wm-k"/><path class="difb_l_3t wm-shadow"/><path class="bxp-4qb3o wm-k"/><path class="eycan2bvo wm-a"/><path class="ox2v0n22b wm-s"/></g>`,
		"fallback": "withicons:ring-box-engrave",
	});
}

export default Component;

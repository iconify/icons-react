import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bkqxbnb8b.css';
import '../../css/u/usypnx0pj.css';
import '../../css/d/db_fcac8o.css';
import '../../css/j/jp-rqubck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bkqxbnb8b wm-k"/><path class="usypnx0pj wm-s"/><path class="db_fcac8o wm-k"/><path class="jp-rqubck wm-s"/></g>`,
		"fallback": "withicons:shield-off-sketch",
	});
}

export default Component;

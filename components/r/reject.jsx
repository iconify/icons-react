import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rj21gvb7h.css';
import '../../css/r/r78wm_rop.css';
import '../../css/i/i_dmff78x.css';
import '../../css/r/ro19ge9rq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rj21gvb7h"/><path class="r78wm_rop"/><path class="i_dmff78x"/><path class="ro19ge9rq"/></g>`,
		"fallback": "icon-park:reject",
	});
}

export default Component;

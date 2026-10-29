import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mecf0cntj.css';
import '../../css/f/f7se-fbvj.css';
import '../../css/q/q-55d_bvt.css';
import '../../css/a/a3092jbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mecf0cntj wm-k"/><path class="f7se-fbvj wm-shadow"/><path class="q-55d_bvt wm-k"/><path class="a3092jbvt wm-a"/></g>`,
		"fallback": "withicons:ticket-engrave",
	});
}

export default Component;

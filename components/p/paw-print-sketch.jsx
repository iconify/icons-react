import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d4npf2b7l.css';
import '../../css/a/aq2xiwpnd.css';
import '../../css/e/ex3s_hbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d4npf2b7l"/><path class="aq2xiwpnd wm-k"/><path class="ex3s_hbnx wm-a"/></g>`,
		"fallback": "withicons:paw-print-sketch",
	});
}

export default Component;

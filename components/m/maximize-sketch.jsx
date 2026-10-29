import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/favheljet.css';
import '../../css/r/r90zuab0u.css';
import '../../css/u/u_1ogdcfb.css';
import '../../css/b/bbkvi1b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="favheljet wm-k"/><path class="r90zuab0u wm-a"/><path class="u_1ogdcfb wm-k"/><path class="bbkvi1b5u wm-a"/></g>`,
		"fallback": "withicons:maximize-sketch",
	});
}

export default Component;

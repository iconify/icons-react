import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pnk4cfbhi.css';
import '../../css/s/s7iqi01xc.css';
import '../../css/d/dyl9j_8su.css';
import '../../css/e/e61c4pwgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pnk4cfbhi wm-k"/><path class="s7iqi01xc wm-shadow"/><path class="dyl9j_8su wm-k"/><path class="e61c4pwgm wm-a"/></g>`,
		"fallback": "withicons:tag-engrave",
	});
}

export default Component;

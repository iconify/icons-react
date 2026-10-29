import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pe_q0p22f.css';
import '../../css/c/cjljwz1fs.css';
import '../../css/r/r9clafb6t.css';
import '../../css/n/nwhtk883n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pe_q0p22f"/><path class="cjljwz1fs wm-a"/><path class="r9clafb6t wm-k"/><path class="nwhtk883n wm-a"/></g>`,
		"fallback": "withicons:kanban-sketch",
	});
}

export default Component;

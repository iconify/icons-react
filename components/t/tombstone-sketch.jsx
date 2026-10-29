import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fkib5fbzb.css';
import '../../css/n/nplj_bcal.css';
import '../../css/s/sajyvl67j.css';
import '../../css/l/lg35ukd_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fkib5fbzb"/><path class="nplj_bcal wm-k"/><path class="sajyvl67j wm-k"/><path class="lg35ukd_q wm-a"/></g>`,
		"fallback": "withicons:tombstone-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pmgr_fqgg.css';
import '../../css/g/gpu50ftma.css';
import '../../css/s/s36pesbba.css';
import '../../css/e/enuleymwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pmgr_fqgg wm-k"/><path class="gpu50ftma wm-a"/><path class="s36pesbba wm-k"/><path class="enuleymwy wm-a"/></g>`,
		"fallback": "withicons:redo-sketch",
	});
}

export default Component;

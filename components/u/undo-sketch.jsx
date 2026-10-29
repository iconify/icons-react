import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c86_pkcpy.css';
import '../../css/k/ku_46mpxr.css';
import '../../css/n/n8izo4b6v.css';
import '../../css/u/uip_160je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c86_pkcpy wm-k"/><path class="ku_46mpxr wm-a"/><path class="n8izo4b6v wm-k"/><path class="uip_160je wm-a"/></g>`,
		"fallback": "withicons:undo-sketch",
	});
}

export default Component;

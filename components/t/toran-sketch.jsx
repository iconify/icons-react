import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rqhbxpmil.css';
import '../../css/s/sd6unnbbl.css';
import '../../css/f/f7sc4du7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rqhbxpmil"/><path class="sd6unnbbl wm-k"/><path class="f7sc4du7o wm-a"/></g>`,
		"fallback": "withicons:toran-sketch",
	});
}

export default Component;

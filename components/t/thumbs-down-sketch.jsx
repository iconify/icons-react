import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d69hxya3k.css';
import '../../css/c/cxngk4btb.css';
import '../../css/x/xj8d2h4lb.css';
import '../../css/u/udv511-gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d69hxya3k"/><path class="cxngk4btb wm-k"/><path class="wm-k xj8d2h4lb"/><path class="udv511-gg wm-a"/></g>`,
		"fallback": "withicons:thumbs-down-sketch",
	});
}

export default Component;

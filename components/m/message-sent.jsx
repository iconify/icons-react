import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv_nbcc5x.css';
import '../../css/x/xr1cpub8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pv_nbcc5x"/><path class="xr1cpub8x"/></g>`,
		"fallback": "icon-park-outline:message-sent",
	});
}

export default Component;

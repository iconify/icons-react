import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rma5_ql1e.css';
import '../../css/i/ip-kvve8g.css';
import '../../css/w/wno59xbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rma5_ql1e"/><path class="ip-kvve8g"/><path class="wno59xbno"/></g>`,
		"fallback": "solar:panel-right-open-line-duotone",
	});
}

export default Component;

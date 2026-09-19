import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nzbdwybwc.css';
import '../../css/r/rm1_dwcor.css';
import '../../css/m/meyrv7bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nzbdwybwc"/><path class="rm1_dwcor"/><path class="meyrv7bsq"/></g>`,
		"fallback": "hugeicons:shipment-tracking",
	});
}

export default Component;

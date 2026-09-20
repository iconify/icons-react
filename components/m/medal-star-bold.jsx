import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wlx-7acws.css';
import '../../css/g/gce_qaclu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wlx-7acws"/><path class="gce_qaclu"/></g>`,
		"fallback": "solar:medal-star-bold",
	});
}

export default Component;

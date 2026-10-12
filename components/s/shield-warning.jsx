import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8sfki2dh.css';
import '../../css/e/e5y4kzbgm.css';
import '../../css/w/wgdhbm08g.css';
import '../../css/q/qbwmvc_ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8sfki2dh"/><path class="e5y4kzbgm"/><path class="wgdhbm08g"/><path class="qbwmvc_ha"/></g>`,
		"fallback": "andrsrxn:shield-warning",
	});
}

export default Component;

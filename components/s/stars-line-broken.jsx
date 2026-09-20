import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/h/hhc5iou_j.css';
import '../../css/w/ws_62zb9c.css';
import '../../css/r/rbhxiftgz.css';
import '../../css/u/u3fmu7w8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="hhc5iou_j"/><path class="ws_62zb9c"/><path class="rbhxiftgz"/><path class="u3fmu7w8w"/></g>`,
		"fallback": "solar:stars-line-broken",
	});
}

export default Component;

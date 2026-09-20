import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvdpjlbmz.css';
import '../../css/y/yv7vu1bvk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvdpjlbmz"/><path class="yv7vu1bvk"/></g>`,
		"fallback": "teenyicons:ms-powerpoint-solid",
	});
}

export default Component;

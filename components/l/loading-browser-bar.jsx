import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uv6xp-ayh.css';
import '../../css/v/vxqky-bzm.css';
import '../../css/w/wsgdav6vn.css';
import '../../css/p/p7_0k8bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uv6xp-ayh"/><path class="vxqky-bzm"/><path class="wsgdav6vn"/><path class="p7_0k8bil"/></g>`,
		"fallback": "streamline-freehand:loading-browser-bar",
	});
}

export default Component;

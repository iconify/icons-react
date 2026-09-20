import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nss1y_bev.css';
import '../../css/b/bd9c_tbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nss1y_bev"/><path class="bd9c_tbgl"/></g>`,
		"fallback": "streamline-freehand:office-stamp-document",
	});
}

export default Component;

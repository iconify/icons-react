import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v3d2qxsae.css';
import '../../css/v/vo44-yskd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v3d2qxsae"/><path class="vo44-yskd"/></g>`,
		"fallback": "streamline-freehand:programming-monitor",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vg48aibdn.css';
import '../../css/y/yaldm0lqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vg48aibdn"/><path class="yaldm0lqi"/></g>`,
		"fallback": "streamline-freehand:terminal",
	});
}

export default Component;

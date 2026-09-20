import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z6vrq6bvh.css';
import '../../css/v/vxpd7-lbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z6vrq6bvh"/><path class="vxpd7-lbc"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-camera",
	});
}

export default Component;

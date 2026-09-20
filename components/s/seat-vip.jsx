import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jnk15obcq.css';
import '../../css/v/vdvzwmbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jnk15obcq"/><path class="vdvzwmbtr"/></g>`,
		"fallback": "streamline-freehand:seat-vip",
	});
}

export default Component;

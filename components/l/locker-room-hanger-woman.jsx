import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fl93n_b6p.css';
import '../../css/u/uz7-1wbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fl93n_b6p"/><path class="uz7-1wbmz"/></g>`,
		"fallback": "streamline-freehand:locker-room-hanger-woman",
	});
}

export default Component;

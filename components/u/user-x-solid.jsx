import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/swspfobdo.css';
import '../../css/p/p1ycebxfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="swspfobdo"/><path class="p1ycebxfi wm-s"/></g>`,
		"fallback": "withicons:user-x-solid",
	});
}

export default Component;

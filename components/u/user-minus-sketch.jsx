import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nsj6ylquj.css';
import '../../css/w/wg5tz-s1o.css';
import '../../css/a/a31ecn6xc.css';
import '../../css/p/p2lfr2uwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nsj6ylquj"/><path class="wg5tz-s1o wm-k"/><path class="a31ecn6xc wm-k"/><path class="p2lfr2uwh wm-s"/></g>`,
		"fallback": "withicons:user-minus-sketch",
	});
}

export default Component;

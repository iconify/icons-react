import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uw11hvb1q.css';
import '../../css/s/slc920y5k.css';
import '../../css/z/zy99p2e9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uw11hvb1q"/><path class="slc920y5k"/><path class="zy99p2e9n"/></g>`,
		"fallback": "reicon:poll-notif",
	});
}

export default Component;

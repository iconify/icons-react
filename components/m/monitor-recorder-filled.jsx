import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zm06jeb1x.css';
import '../../css/w/w4k-upsnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zm06jeb1x"/><path class="w4k-upsnq"/></g>`,
		"fallback": "reicon:monitor-recorder-filled",
	});
}

export default Component;

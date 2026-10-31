import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xsthdprds.css';
import '../../css/l/l905rqxrz.css';
import '../../css/c/cp9xf13rx.css';
import '../../css/q/q2i6b1bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xsthdprds"/><path class="l905rqxrz"/><path class="cp9xf13rx"/><path class="q2i6b1bjn"/></g>`,
		"fallback": "withicons-retro:sky-lantern",
	});
}

export default Component;

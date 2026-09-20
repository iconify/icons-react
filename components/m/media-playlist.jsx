import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f66m5lw5s.css';
import '../../css/q/q_nvhhbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f66m5lw5s"/><path class="q_nvhhbcp"/></g>`,
		"fallback": "nrk:media-playlist",
	});
}

export default Component;

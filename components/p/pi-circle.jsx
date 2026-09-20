import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/df3s31o3t.css';
import '../../css/r/rhh2--b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="df3s31o3t"/><path class="rhh2--b-z"/></g>`,
		"fallback": "pixelarticons:pi-circle",
	});
}

export default Component;

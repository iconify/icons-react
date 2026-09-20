import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwtcsdqrk.css';
import '../../css/v/vx9l-ww8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vwtcsdqrk"/><path clip-rule="evenodd" class="vx9l-ww8j"/></g>`,
		"fallback": "solar:videocamera-off-outline",
	});
}

export default Component;

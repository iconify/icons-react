import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_hofuc4l.css';
import '../../css/l/l4zku_c0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_hofuc4l secondary"/><path class="l4zku_c0f primary"/></g>`,
		"fallback": "iconaut:sunflower-duotone",
	});
}

export default Component;

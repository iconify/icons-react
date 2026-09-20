import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8lffl2gl.css';
import '../../css/a/a2-6c9lfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8lffl2gl"/><path class="a2-6c9lfp"/></g>`,
		"fallback": "solar:screencast-2-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8tb4hzkz.css';
import '../../css/s/s9e2l8bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e8tb4hzkz"/><path clip-rule="evenodd" class="s9e2l8bof"/></g>`,
		"fallback": "solar:login-3-outline",
	});
}

export default Component;

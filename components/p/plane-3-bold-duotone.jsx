import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ph5jvjiif.css';
import '../../css/u/u8j3uxbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ph5jvjiif"/><path class="u8j3uxbqd"/></g>`,
		"fallback": "solar:plane-3-bold-duotone",
	});
}

export default Component;

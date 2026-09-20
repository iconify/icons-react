import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9e7oqb2b.css';
import '../../css/v/vn71wy-bl.css';
import '../../css/t/t0dlfk87e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m9e7oqb2b"/><path clip-rule="evenodd" class="vn71wy-bl"/><path class="t0dlfk87e"/></g>`,
		"fallback": "reicon:laptop-duotone",
	});
}

export default Component;

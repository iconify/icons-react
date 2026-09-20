import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g200vbbhg.css';
import '../../css/z/zt97cke0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g200vbbhg"/><path clip-rule="evenodd" class="zt97cke0f"/></g>`,
		"fallback": "reicon:passport-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyds-tsrk.css';
import '../../css/z/zebm_0b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lyds-tsrk"/><path class="zebm_0b9g"/></g>`,
		"fallback": "pixelarticons:tool-case-sharp",
	});
}

export default Component;

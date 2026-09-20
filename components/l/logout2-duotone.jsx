import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klk5ys0tc.css';
import '../../css/d/d0855ab8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="klk5ys0tc"/><path clip-rule="evenodd" class="d0855ab8x"/></g>`,
		"fallback": "reicon:logout2-duotone",
	});
}

export default Component;

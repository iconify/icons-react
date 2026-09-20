import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wd-n0bc9l.css';
import '../../css/u/u3ceux_oy.css';
import '../../css/y/yb8gifd6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wd-n0bc9l"/><path clip-rule="evenodd" class="u3ceux_oy"/><path clip-rule="evenodd" class="yb8gifd6l"/></g>`,
		"fallback": "reicon:medical-kit-duotone",
	});
}

export default Component;

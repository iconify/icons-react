import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yns8t4bbk.css';
import '../../css/d/djt0e9b0f.css';
import '../../css/o/oip2tteqt.css';
import '../../css/c/czuzz3bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yns8t4bbk"/><path clip-rule="evenodd" class="djt0e9b0f"/><path class="oip2tteqt"/><path class="czuzz3bda"/></g>`,
		"fallback": "reicon:music-lib2-duotone",
	});
}

export default Component;

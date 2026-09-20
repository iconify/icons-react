import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hyt9a0afz.css';
import '../../css/x/xefmovr8o.css';
import '../../css/a/a56fv5c3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hyt9a0afz"/><path class="xefmovr8o"/><path class="a56fv5c3s"/></g>`,
		"fallback": "pixelarticons:ship",
	});
}

export default Component;

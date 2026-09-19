import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6lvct0bk.css';
import '../../css/i/izyej6b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6lvct0bk"/><path clip-rule="evenodd" class="izyej6b1s"/></g>`,
		"fallback": "gg:push-chevron-down-o",
	});
}

export default Component;

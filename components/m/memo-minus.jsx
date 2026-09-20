import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9fcwidun.css';
import '../../css/a/a2ujucc-o.css';
import '../../css/w/w9p3ambxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q9fcwidun"/><path class="a2ujucc-o"/><path clip-rule="evenodd" class="w9p3ambxu"/></g>`,
		"fallback": "reicon:memo-minus",
	});
}

export default Component;

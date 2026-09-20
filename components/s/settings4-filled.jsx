import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jztdzfbqk.css';
import '../../css/a/a8-k_pb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jztdzfbqk"/><path class="a8-k_pb0k"/></g>`,
		"fallback": "reicon:settings4-filled",
	});
}

export default Component;

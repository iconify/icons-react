import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljs4j84fn.css';
import '../../css/j/j4u83gqzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljs4j84fn"/><path clip-rule="evenodd" class="j4u83gqzx"/></g>`,
		"fallback": "reicon:remote2-filled",
	});
}

export default Component;

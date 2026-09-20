import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5h5rlbqo.css';
import '../../css/v/v4p57cizq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s5h5rlbqo"/><path clip-rule="evenodd" class="v4p57cizq"/></g>`,
		"fallback": "reicon:message-x",
	});
}

export default Component;

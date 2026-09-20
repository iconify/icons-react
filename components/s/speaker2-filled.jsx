import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzxmq7dvg.css';
import '../../css/g/gqifz3bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzxmq7dvg"/><path clip-rule="evenodd" class="gqifz3bqo"/></g>`,
		"fallback": "reicon:speaker2-filled",
	});
}

export default Component;

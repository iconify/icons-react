import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eh_c7sarm.css';
import '../../css/y/yysighv0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eh_c7sarm"/><path clip-rule="evenodd" class="yysighv0s"/></g>`,
		"fallback": "reicon:sticker-smile2-filled",
	});
}

export default Component;

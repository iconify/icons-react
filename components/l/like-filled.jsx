import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tg6bulgmk.css';
import '../../css/w/wr7cxbcld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tg6bulgmk"/><path clip-rule="evenodd" class="wr7cxbcld"/></g>`,
		"fallback": "reicon:like-filled",
	});
}

export default Component;

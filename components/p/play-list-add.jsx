import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-_cx7qku.css';
import '../../css/r/rts1htbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y-_cx7qku"/><path class="rts1htbbj"/></g>`,
		"fallback": "gg:play-list-add",
	});
}

export default Component;

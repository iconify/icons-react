import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzf9x5vrh.css';
import '../../css/v/vjubz7bqp.css';
import '../../css/w/w9p3ambxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzf9x5vrh"/><path class="vjubz7bqp"/><path clip-rule="evenodd" class="w9p3ambxu"/></g>`,
		"fallback": "reicon:memo-check",
	});
}

export default Component;

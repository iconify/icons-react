import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qih0vc6mu.css';
import '../../css/i/ig99gqbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qih0vc6mu"/><path clip-rule="evenodd" class="ig99gqbut"/></g>`,
		"fallback": "nrk:shapes-unordered",
	});
}

export default Component;

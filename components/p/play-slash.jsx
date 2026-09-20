import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2cbnacxb.css';
import '../../css/l/l5xs08b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x2cbnacxb"/><path class="l5xs08b0w"/></g>`,
		"fallback": "nrk:play-slash",
	});
}

export default Component;

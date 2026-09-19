import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nce_1bbsm.css';
import '../../css/h/h6n2_8blk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nce_1bbsm"/><path class="h6n2_8blk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:stop-sign",
	});
}

export default Component;

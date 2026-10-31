import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2bxq2wak.css';
import '../../css/y/yd5rdxbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s2bxq2wak"/><path class="yd5rdxbnk"/></g>`,
		"fallback": "coolicons:signpost-bulk-round",
	});
}

export default Component;

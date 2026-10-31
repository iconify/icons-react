import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2gru4blp.css';
import '../../css/j/jb83psb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s2gru4blp"/><path class="jb83psb2t"/></g>`,
		"fallback": "coolicons:slider-3-bulk-round",
	});
}

export default Component;

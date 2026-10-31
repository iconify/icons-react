import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8abciafc.css';
import '../../css/x/x24cvsbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q8abciafc"/><path class="x24cvsbyw"/></g>`,
		"fallback": "coolicons:music-note-off-bulk-round",
	});
}

export default Component;

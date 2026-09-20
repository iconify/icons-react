import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuiniwbro.css';
import '../../css/j/jlcyzeb2p.css';
import '../../css/r/r5ykmgbft.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cuiniwbro"/><path class="jlcyzeb2p"/><path clip-rule="evenodd" class="r5ykmgbft"/></g>`,
		"fallback": "pepicons-pencil:money-note",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8-x1x6iv.css';
import '../../css/u/ur64cxi6w.css';
import '../../css/l/lkv0xnbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w8-x1x6iv"/><path clip-rule="evenodd" class="ur64cxi6w"/><path class="lkv0xnbqa"/></g>`,
		"fallback": "reicon:music-note2-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzf9x5vrh.css';
import '../../css/z/z9wq9ylvw.css';
import '../../css/x/x2m96xbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzf9x5vrh"/><path class="z9wq9ylvw"/><path clip-rule="evenodd" class="x2m96xbwi"/></g>`,
		"fallback": "reicon:memo-plus",
	});
}

export default Component;

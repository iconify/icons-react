import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fds47bcdd.css';
import '../../css/t/tsmzb05mv.css';
import '../../css/w/wvhc50bir.css';
import '../../css/c/c9-_ko9gt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fds47bcdd"/><path clip-rule="evenodd" class="tsmzb05mv"/><path class="wvhc50bir"/><path class="c9-_ko9gt"/></g>`,
		"fallback": "glyphs:joker-bold",
	});
}

export default Component;

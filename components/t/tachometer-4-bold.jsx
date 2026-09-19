import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/teha5-0_r.css';
import '../../css/r/r48knpqnl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="teha5-0_r"/><path clip-rule="evenodd" class="r48knpqnl"/></g>`,
		"fallback": "glyphs:tachometer-4-bold",
	});
}

export default Component;

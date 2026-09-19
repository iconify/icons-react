import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a6992kbil.css';
import '../../css/r/rt2ut9r3m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a6992kbil"/><path class="rt2ut9r3m"/></g>`,
		"fallback": "glyphs:night-bold",
	});
}

export default Component;

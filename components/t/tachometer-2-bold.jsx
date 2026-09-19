import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnk6z9mnm.css';
import '../../css/y/y1stfoxeh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnk6z9mnm"/><path clip-rule="evenodd" class="y1stfoxeh"/></g>`,
		"fallback": "glyphs:tachometer-2-bold",
	});
}

export default Component;

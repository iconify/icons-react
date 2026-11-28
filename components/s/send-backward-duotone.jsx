import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3oazrncr.css';
import '../../css/g/gxg1pfhph.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r3oazrncr"/><path class="gxg1pfhph"/></g>`,
		"fallback": "pullo:send-backward-duotone",
	});
}

export default Component;

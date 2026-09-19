import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axnr1qcyu.css';
import '../../css/r/rcua8abnl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="axnr1qcyu"/><path class="rcua8abnl"/></g>`,
		"fallback": "glyphs:lock-open-1-bold",
	});
}

export default Component;

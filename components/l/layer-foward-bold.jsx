import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wvwfn091t.css';
import '../../css/w/wgiykycqr.css';
import '../../css/i/ioatddbeq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wvwfn091t"/><path class="wgiykycqr"/><path class="ioatddbeq"/></g>`,
		"fallback": "glyphs:layer-foward-bold",
	});
}

export default Component;

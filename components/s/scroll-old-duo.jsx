import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yye54xbit.css';
import '../../css/r/r_qdkuptq.css';
import '../../css/j/jk79u8b5k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yye54xbit"/><path class="r_qdkuptq"/><path class="jk79u8b5k"/></g>`,
		"fallback": "glyphs:scroll-old-duo",
	});
}

export default Component;

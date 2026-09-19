import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ik6pizbiy.css';
import '../../css/l/l_tqjkb0i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ik6pizbiy"/><path class="l_tqjkb0i"/></g>`,
		"fallback": "glyphs:microphone-2-bold",
	});
}

export default Component;

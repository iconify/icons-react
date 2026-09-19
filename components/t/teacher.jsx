import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ns504wbae.css';
import '../../css/u/ux1axybpz.css';
import '../../css/i/i6k4p77-r.css';
import '../../css/z/zya93rpof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ns504wbae"/><path class="ux1axybpz"/><path class="i6k4p77-r"/><path class="zya93rpof"/></g>`,
		"fallback": "fluent-emoji-high-contrast:teacher",
	});
}

export default Component;

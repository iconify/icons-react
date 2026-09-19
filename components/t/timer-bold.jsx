import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3l38ubpc.css';
import '../../css/z/zd-zmcwso.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w3l38ubpc"/><path clip-rule="evenodd" class="zd-zmcwso"/></g>`,
		"fallback": "glyphs:timer-bold",
	});
}

export default Component;

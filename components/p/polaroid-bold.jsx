import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-ma86nsz.css';
import '../../css/j/j30kfxb3i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-ma86nsz"/><path clip-rule="evenodd" class="j30kfxb3i"/></g>`,
		"fallback": "glyphs:polaroid-bold",
	});
}

export default Component;

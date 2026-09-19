import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sowizbbll.css';
import '../../css/o/odhttzb0a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sowizbbll"/><path class="odhttzb0a"/></g>`,
		"fallback": "glyphs:mushroom-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydf4e9b3x.css';
import '../../css/x/xx7raej9t.css';
import '../../css/d/db2dyn3zs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ydf4e9b3x"/><path class="xx7raej9t"/><path class="db2dyn3zs"/></g>`,
		"fallback": "glyphs:sun-1-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/obwky_97w.css';
import '../../css/j/ju6owbb8t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="obwky_97w"/><path clip-rule="evenodd" class="ju6owbb8t"/></g>`,
		"fallback": "glyphs:tachometer-8-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oz57-db5e.css';
import '../../css/y/y1mg03o2a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oz57-db5e"/><path clip-rule="evenodd" class="y1mg03o2a"/></g>`,
		"fallback": "glyphs:sun-bold",
	});
}

export default Component;

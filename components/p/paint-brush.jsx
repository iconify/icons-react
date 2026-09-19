import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eu560-7oy.css';
import '../../css/z/z0nhkbcvf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eu560-7oy"/><path class="z0nhkbcvf"/></g>`,
		"fallback": "glyphs-poly:paint-brush",
	});
}

export default Component;

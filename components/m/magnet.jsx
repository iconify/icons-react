import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cy0doh32p.css';
import '../../css/y/ycwde-bjy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cy0doh32p"/><path class="ycwde-bjy"/></g>`,
		"fallback": "glyphs-poly:magnet",
	});
}

export default Component;

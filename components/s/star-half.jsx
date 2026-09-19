import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jg2ryznhq.css';
import '../../css/r/rkwwq0ira.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jg2ryznhq"/><path class="rkwwq0ira"/></g>`,
		"fallback": "glyphs-poly:star-half",
	});
}

export default Component;

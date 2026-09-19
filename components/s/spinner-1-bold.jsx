import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sur0aqguh.css';
import '../../css/j/j8tqmiuav.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sur0aqguh"/><path class="j8tqmiuav"/></g>`,
		"fallback": "glyphs:spinner-1-bold",
	});
}

export default Component;

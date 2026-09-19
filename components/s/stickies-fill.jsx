import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8j244b2u.css';
import '../../css/f/fpsrixmcp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8j244b2u"/><path class="fpsrixmcp"/></g>`,
		"fallback": "bi:stickies-fill",
	});
}

export default Component;

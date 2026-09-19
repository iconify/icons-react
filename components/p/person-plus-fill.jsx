import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j64n2mbvc.css';
import '../../css/f/f3pgn3sos.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j64n2mbvc"/><path class="f3pgn3sos"/></g>`,
		"fallback": "bi:person-plus-fill",
	});
}

export default Component;

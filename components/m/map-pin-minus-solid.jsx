import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyszq213g.css';
import '../../css/j/j_em0kw7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyszq213g"/><path class="j_em0kw7f"/></g>`,
		"fallback": "mynaui:map-pin-minus-solid",
	});
}

export default Component;

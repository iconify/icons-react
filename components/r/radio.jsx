import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zocsw-b9c.css';
import '../../css/a/albikqbom.css';
import '../../css/c/c7bj3u4fy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zocsw-b9c"/><path class="albikqbom"/><path clip-rule="evenodd" class="c7bj3u4fy"/></g>`,
		"fallback": "pepicons-pencil:radio",
	});
}

export default Component;

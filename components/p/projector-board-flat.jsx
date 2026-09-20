import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eb5liz2ay.css';
import '../../css/l/luv1-gbww.css';
import '../../css/a/ae_1xpylo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eb5liz2ay"/><path class="luv1-gbww"/><path class="ae_1xpylo"/></g>`,
		"fallback": "streamline-color:projector-board-flat",
	});
}

export default Component;

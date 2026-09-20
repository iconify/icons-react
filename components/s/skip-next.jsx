import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5qs8rbrj.css';
import '../../css/a/avbqxqb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r5qs8rbrj"/><path class="avbqxqb1g"/></g>`,
		"fallback": "reicon:skip-next",
	});
}

export default Component;

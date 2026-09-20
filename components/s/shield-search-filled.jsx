import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7avd4b0z.css';
import '../../css/r/r7bj7bkyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c7avd4b0z"/><path class="r7bj7bkyp"/></g>`,
		"fallback": "reicon:shield-search-filled",
	});
}

export default Component;

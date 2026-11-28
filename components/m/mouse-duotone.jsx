import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b40wijb4b.css';
import '../../css/x/x-v35ve3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b40wijb4b secondary"/><path class="primary x-v35ve3g"/></g>`,
		"fallback": "iconaut:mouse-duotone",
	});
}

export default Component;

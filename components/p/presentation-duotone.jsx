import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcv_6ac1g.css';
import '../../css/b/b5kgfhbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jcv_6ac1g"/><path class="b5kgfhbjr"/></g>`,
		"fallback": "reicon:presentation-duotone",
	});
}

export default Component;

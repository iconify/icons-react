import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-_1ozgrf.css';
import '../../css/c/c9so44d3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-_1ozgrf"/><path class="c9so44d3x"/></g>`,
		"fallback": "reicon:square-arrow-right-down-duotone",
	});
}

export default Component;

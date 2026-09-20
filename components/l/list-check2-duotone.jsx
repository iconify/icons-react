import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo7hz6bmt.css';
import '../../css/r/r09r32lel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xo7hz6bmt"/><path class="r09r32lel"/></g>`,
		"fallback": "reicon:list-check2-duotone",
	});
}

export default Component;

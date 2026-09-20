import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-l6dcceu.css';
import '../../css/r/r5jmk_bor.css';
import '../../css/i/i21ar1oaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b-l6dcceu"/><path class="r5jmk_bor"/><path class="i21ar1oaf"/></g>`,
		"fallback": "reicon:three-square-filled",
	});
}

export default Component;

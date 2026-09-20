import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-6kvko_g.css';
import '../../css/j/jc0qeebnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-6kvko_g"/><path class="jc0qeebnv"/></g>`,
		"fallback": "reicon:unlock3-filled",
	});
}

export default Component;

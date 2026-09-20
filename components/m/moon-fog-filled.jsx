import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jt2ot96wt.css';
import '../../css/f/f0pbsxm7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jt2ot96wt"/><path class="f0pbsxm7n"/></g>`,
		"fallback": "reicon:moon-fog-filled",
	});
}

export default Component;

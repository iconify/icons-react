import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1du5lbfg.css';
import '../../css/j/ji55s_6ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l1du5lbfg"/><path class="ji55s_6ux"/></g>`,
		"fallback": "reicon:user-speak-filled",
	});
}

export default Component;

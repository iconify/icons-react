import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzhr5pydv.css';
import '../../css/q/q1ucdqswu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dzhr5pydv secondary"/><path class="primary q1ucdqswu"/></g>`,
		"fallback": "iconaut:lamp-floor-duotone",
	});
}

export default Component;

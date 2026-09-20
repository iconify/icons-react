import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vlgr2_asf.css';
import '../../css/h/huqn6xs3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vlgr2_asf"/><path class="huqn6xs3g"/></g>`,
		"fallback": "reicon:safe-home-filled",
	});
}

export default Component;

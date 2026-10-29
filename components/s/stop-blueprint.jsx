import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wluwfzejn.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/lqm3yub_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wluwfzejn wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="lqm3yub_u wm-k"/></g>`,
		"fallback": "withicons:stop-blueprint",
	});
}

export default Component;

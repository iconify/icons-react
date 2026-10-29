import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nvlzdbb6n.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/flyagch6b.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/h/h14p-zbik.css';
import '../../css/d/d33242b_m.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nvlzdbb6n wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="flyagch6b wm-k"/><path class="v3uzkxb0u wm-s"/><path class="h14p-zbik wm-a"/><path class="d33242b_m wm-k"/><path class="d6b7dubbd wm-s"/></g>`,
		"fallback": "withicons:server-off-blueprint",
	});
}

export default Component;

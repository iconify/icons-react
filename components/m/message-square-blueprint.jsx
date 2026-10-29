import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yaljho52x.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/p/pq0fz3bmd.css';
import '../../css/v/vaib7gbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yaljho52x"/><path class="cf3uzcrzx wm-deco"/><path class="pq0fz3bmd"/><path class="vaib7gbcq"/></g>`,
		"fallback": "withicons:message-square-blueprint",
	});
}

export default Component;

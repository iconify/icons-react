import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yaljho52x.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/p/pq0fz3bmd.css';
import '../../css/p/pr09bmbgq.css';
import '../../css/v/vaib7gbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yaljho52x"/><path class="cf3uzcrzx wm-deco"/><path class="pq0fz3bmd wm-k"/><path class="pr09bmbgq wm-a"/><path class="vaib7gbcq wm-k"/></g>`,
		"fallback": "withicons:message-square-code-blueprint",
	});
}

export default Component;

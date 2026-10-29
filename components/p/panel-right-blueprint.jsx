import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/at84-ubob.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/jv-k-dbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="at84-ubob wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="jv-k-dbpo"/></g>`,
		"fallback": "withicons:panel-right-blueprint",
	});
}

export default Component;

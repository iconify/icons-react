import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1phpaccm.css';
import '../../css/u/u7im48hub.css';
import '../../css/e/e9_9o-xsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1phpaccm"/><path class="u7im48hub"/><path class="e9_9o-xsb"/></g>`,
		"fallback": "reicon:moon-fog-duotone",
	});
}

export default Component;

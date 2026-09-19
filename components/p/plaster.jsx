import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4wm33b5i.css';
import '../../css/u/u27pckbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e4wm33b5i"/><path clip-rule="evenodd" class="u27pckbbk"/></g>`,
		"fallback": "griddy-icons:plaster",
	});
}

export default Component;

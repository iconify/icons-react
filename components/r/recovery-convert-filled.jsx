import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h346c1bwl.css';
import '../../css/i/i4lryukct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h346c1bwl"/><path class="i4lryukct"/></g>`,
		"fallback": "reicon:recovery-convert-filled",
	});
}

export default Component;

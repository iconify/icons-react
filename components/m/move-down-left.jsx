import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1bmheb5t.css';
import '../../css/l/lywyqebbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1bmheb5t"/><path class="lywyqebbs"/></g>`,
		"fallback": "hugeicons:move-down-left",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-z4z_b6l.css';
import '../../css/d/dfvd5coju.css';
import '../../css/j/j926utbhk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-z4z_b6l"/><path clip-rule="evenodd" class="dfvd5coju"/><path clip-rule="evenodd" class="j926utbhk"/></g>`,
		"fallback": "streamline-plump-color:like-1-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3rj_7bou.css';
import '../../css/r/rnqo7acni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p3rj_7bou"/><path class="rnqo7acni"/></g>`,
		"fallback": "streamline-plump-color:laptop-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt1f3wyyx.css';
import '../../css/i/ilh-kebmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lt1f3wyyx"/><path clip-rule="evenodd" class="ilh-kebmx"/></g>`,
		"fallback": "healthicons:medicine-bottle-outline",
	});
}

export default Component;

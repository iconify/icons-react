import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqp09ccgi.css';
import '../../css/r/rf3zuvztw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zqp09ccgi"/><path class="rf3zuvztw"/></g>`,
		"fallback": "healthicons:resilient-and-migration-sensitive-health-system",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zh-rl6gcp.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTriangleSmallNegative0)"><path clip-rule="evenodd" class="zh-rl6gcp"/></g><defs><clipPath id="healthiconsTriangleSmallNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:triangle-small-negative",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bd0nalxyt.css';
import '../../css/q/qh1gefkwh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bd0nalxyt"/><path class="qh1gefkwh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:speaker-medium-volume",
	});
}

export default Component;

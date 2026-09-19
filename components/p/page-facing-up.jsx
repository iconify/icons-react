import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tevor1ebn.css';
import '../../css/v/vjgsxq_aq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tevor1ebn"/><path class="vjgsxq_aq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:page-facing-up",
	});
}

export default Component;

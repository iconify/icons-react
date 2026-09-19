import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dasydz0wv.css';
import '../../css/t/t8m9kwbhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dasydz0wv"/><path clip-rule="evenodd" class="t8m9kwbhx"/></g>`,
		"fallback": "healthicons:vih2x-outline",
	});
}

export default Component;

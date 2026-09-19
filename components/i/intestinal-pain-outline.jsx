import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5qhs0bhp.css';
import '../../css/p/p_ltn334q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v5qhs0bhp"/><path class="p_ltn334q"/></g>`,
		"fallback": "healthicons:intestinal-pain-outline",
	});
}

export default Component;

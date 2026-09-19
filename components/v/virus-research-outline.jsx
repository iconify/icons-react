import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di9dlabcj.css';
import '../../css/m/mt8uieh0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="di9dlabcj"/><path clip-rule="evenodd" class="mt8uieh0u"/></g>`,
		"fallback": "healthicons:virus-research-outline",
	});
}

export default Component;

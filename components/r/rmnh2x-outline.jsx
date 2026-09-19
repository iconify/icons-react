import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txh34jqec.css';
import '../../css/k/kb9f0zbbj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="txh34jqec"/><path class="kb9f0zbbj"/></g>`,
		"fallback": "healthicons:rmnh2x-outline",
	});
}

export default Component;

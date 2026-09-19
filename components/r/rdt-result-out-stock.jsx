import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2x57wzht.css';
import '../../css/v/vw9spuo9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j2x57wzht"/><path clip-rule="evenodd" class="vw9spuo9g"/></g>`,
		"fallback": "healthicons:rdt-result-out-stock",
	});
}

export default Component;

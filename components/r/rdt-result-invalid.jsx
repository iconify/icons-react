import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qs5otjmnb.css';
import '../../css/w/wzm_t6bph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qs5otjmnb"/><path clip-rule="evenodd" class="wzm_t6bph"/></g>`,
		"fallback": "healthicons:rdt-result-invalid",
	});
}

export default Component;

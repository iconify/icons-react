import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yk6vug9es.css';
import '../../css/s/s0k87vbsb.css';
import '../../css/f/fb092736l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yk6vug9es"/><path clip-rule="evenodd" class="s0k87vbsb"/><path class="fb092736l"/></g>`,
		"fallback": "healthicons:rdt-result-neg-invalid-rectangular",
	});
}

export default Component;

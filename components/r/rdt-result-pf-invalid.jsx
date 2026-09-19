import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky9r5pbzy.css';
import '../../css/u/utr6sxn7s.css';
import '../../css/o/o8sha-b1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ky9r5pbzy"/><path clip-rule="evenodd" class="utr6sxn7s"/><path class="o8sha-b1n"/></g>`,
		"fallback": "healthicons:rdt-result-pf-invalid",
	});
}

export default Component;

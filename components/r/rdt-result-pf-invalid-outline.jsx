import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9-4x4bcb.css';
import '../../css/w/wvouqqeyv.css';
import '../../css/n/nf593dbwl.css';
import '../../css/o/o8sha-b1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o9-4x4bcb"/><path clip-rule="evenodd" class="wvouqqeyv"/><path clip-rule="evenodd" class="nf593dbwl"/><path class="o8sha-b1n"/></g>`,
		"fallback": "healthicons:rdt-result-pf-invalid-outline",
	});
}

export default Component;

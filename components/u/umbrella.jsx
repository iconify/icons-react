import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vmm_qnbyp.css';
import '../../css/v/v6p4k08td.css';
import '../../css/g/gp-9ncbea.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vmm_qnbyp"/><path class="v6p4k08td"/><path clip-rule="evenodd" class="gp-9ncbea"/></g>`,
		"fallback": "pepicons-print:umbrella",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvh_peb7w.css';
import '../../css/k/k5pautcrg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cvh_peb7w"/><path class="k5pautcrg"/></g>`,
		"fallback": "healthicons:resilient-and-migration-sensitive-health-system-outline",
	});
}

export default Component;

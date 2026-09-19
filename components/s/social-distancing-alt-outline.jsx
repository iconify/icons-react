import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9v5_pb9f.css';
import '../../css/p/p_p_t7s3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e9v5_pb9f"/><path class="p_p_t7s3s"/></g>`,
		"fallback": "healthicons:social-distancing-alt-outline",
	});
}

export default Component;

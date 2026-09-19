import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0576abtp.css';
import '../../css/e/e4i20_b2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w0576abtp"/><path clip-rule="evenodd" class="e4i20_b2t"/></g>`,
		"fallback": "healthicons:testicles-outline",
	});
}

export default Component;

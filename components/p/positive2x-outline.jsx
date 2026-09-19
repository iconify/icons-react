import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbmoa7_oq.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vbmoa7_oq"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`,
		"fallback": "healthicons:positive2x-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwx_3nbmi.css';
import '../../css/u/u39eycchn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hwx_3nbmi"/><path clip-rule="evenodd" class="u39eycchn"/></g>`,
		"fallback": "healthicons:truck-driver-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdvih8psk.css';
import '../../css/t/ti0r0kb_m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mdvih8psk"/><path clip-rule="evenodd" class="ti0r0kb_m"/></g>`,
		"fallback": "healthicons:ppe-mask-outline",
	});
}

export default Component;

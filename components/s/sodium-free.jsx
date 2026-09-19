import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5sc3acjh.css';
import '../../css/o/oegy85hhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d5sc3acjh"/><path clip-rule="evenodd" class="oegy85hhy"/></g>`,
		"fallback": "healthicons:sodium-free",
	});
}

export default Component;

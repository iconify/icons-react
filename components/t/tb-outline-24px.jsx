import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qvu90x34h.css';
import '../../css/g/gg50aibvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qvu90x34h"/><path clip-rule="evenodd" class="gg50aibvm"/></g>`,
		"fallback": "healthicons:tb-outline-24px",
	});
}

export default Component;

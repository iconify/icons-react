import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj6aybcne.css';
import '../../css/f/fkw3fxcnc.css';
import '../../css/f/ftri9ubwq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mj6aybcne"/><path class="fkw3fxcnc"/><path class="ftri9ubwq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-in-manual-wheelchair-facing-right",
	});
}

export default Component;

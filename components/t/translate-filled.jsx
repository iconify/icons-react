import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2yxeu0zr.css';
import '../../css/q/qsmndgb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2yxeu0zr"/><path class="qsmndgb5h"/></g>`,
		"fallback": "reicon:translate-filled",
	});
}

export default Component;

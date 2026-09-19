import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvq9-eb3y.css';
import '../../css/i/it05bdxdz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rvq9-eb3y"/><path class="it05bdxdz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:satellite",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sd6h-xbnc.css';
import '../../css/q/qnd1qf16x.css';
import '../../css/m/mud93ub7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sd6h-xbnc"/><path class="qnd1qf16x"/><path class="mud93ub7w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:satellite-antenna",
	});
}

export default Component;

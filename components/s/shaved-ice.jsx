import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6wz3ssxq.css';
import '../../css/d/dqx09ccjv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6wz3ssxq"/><path class="dqx09ccjv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:shaved-ice",
	});
}

export default Component;

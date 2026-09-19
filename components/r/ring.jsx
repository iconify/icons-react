import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crh11t5uv.css';
import '../../css/v/vje2mv53e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="crh11t5uv"/><path class="vje2mv53e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ring",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2ypjebtv.css';
import '../../css/i/il4yv5b3w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s2ypjebtv"/><path class="il4yv5b3w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pool-8-ball",
	});
}

export default Component;

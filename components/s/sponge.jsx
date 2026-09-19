import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-1wjjbns.css';
import '../../css/s/s4-r8nbti.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-1wjjbns"/><path class="s4-r8nbti"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sponge",
	});
}

export default Component;

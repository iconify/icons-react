import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0lqeacxt.css';
import '../../css/q/qtm3lvb5z.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c0lqeacxt"/><path class="qtm3lvb5z"/><path class="uru88vgdy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:shuffle-tracks-button",
	});
}

export default Component;

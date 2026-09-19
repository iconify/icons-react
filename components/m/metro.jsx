import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vq4cvsbpw.css';
import '../../css/p/pr5wudu4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vq4cvsbpw"/><path class="pr5wudu4n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:metro",
	});
}

export default Component;

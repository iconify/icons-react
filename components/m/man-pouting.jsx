import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whstrqbrp.css';
import '../../css/q/q258mcezu.css';
import '../../css/k/k7yk6bbdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="whstrqbrp"/><path class="q258mcezu"/><path class="k7yk6bbdt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-pouting",
	});
}

export default Component;

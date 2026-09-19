import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1ny50d5n.css';
import '../../css/e/ediclqbms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1ny50d5n"/><path class="ediclqbms"/></g>`,
		"fallback": "fluent-emoji-high-contrast:map-of-japan",
	});
}

export default Component;

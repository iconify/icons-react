import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2djsublc.css';
import '../../css/v/v42714yoe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u2djsublc"/><path class="v42714yoe"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tram-car",
	});
}

export default Component;

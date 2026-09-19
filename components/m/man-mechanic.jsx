import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpo1cub5o.css';
import '../../css/t/t4-8m-yws.css';
import '../../css/q/q1kaljbyg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hpo1cub5o"/><path class="t4-8m-yws"/><path class="q1kaljbyg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-mechanic",
	});
}

export default Component;

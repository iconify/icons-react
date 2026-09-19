import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5_k1tbqx.css';
import '../../css/t/t36gbiaeh.css';
import '../../css/u/un1nr9hnz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p5_k1tbqx"/><path class="t36gbiaeh"/><path class="un1nr9hnz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:technologist",
	});
}

export default Component;

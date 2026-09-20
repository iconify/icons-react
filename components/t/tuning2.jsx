import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nbb2-nbej.css';
import '../../css/q/q5pj1qgfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nbb2-nbej"/><path class="q5pj1qgfq"/></g>`,
		"fallback": "reicon:tuning2",
	});
}

export default Component;

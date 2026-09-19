import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ew36xlbmo.css';
import '../../css/d/dk5h7lbfd.css';
import '../../css/l/lgvo6lbhk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ew36xlbmo"/><path class="dk5h7lbfd"/><path class="lgvo6lbhk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:santa-claus",
	});
}

export default Component;

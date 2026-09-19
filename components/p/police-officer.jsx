import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1r682ogy.css';
import '../../css/n/ntop3cclr.css';
import '../../css/q/qnl7b1b9c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1r682ogy"/><path class="ntop3cclr"/><path class="qnl7b1b9c"/></g>`,
		"fallback": "fluent-emoji-high-contrast:police-officer",
	});
}

export default Component;

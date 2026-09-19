import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrqrhrbve.css';
import '../../css/z/z5d3x2soa.css';
import '../../css/z/zcirz6n6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jrqrhrbve"/><path class="z5d3x2soa"/><path class="zcirz6n6l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:princess",
	});
}

export default Component;

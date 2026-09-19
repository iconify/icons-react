import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjodufbjr.css';
import '../../css/m/mnc6bablg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xjodufbjr"/><path class="mnc6bablg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:left-facing-fist",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jb-3m9bdk.css';
import '../../css/h/hovxe1awm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jb-3m9bdk"/><path class="hovxe1awm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tropical-fish",
	});
}

export default Component;

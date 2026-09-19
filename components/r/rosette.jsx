import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvmlj5b8w.css';
import '../../css/v/v_i274qqv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvmlj5b8w"/><path class="v_i274qqv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:rosette",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nod1545_e.css';
import '../../css/v/v116hfb7i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nod1545_e"/><path class="v116hfb7i"/></g>`,
		"fallback": "et:magnifying-glass",
	});
}

export default Component;

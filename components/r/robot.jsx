import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rajf_hbij.css';
import '../../css/u/umm09-q4n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rajf_hbij"/><path class="umm09-q4n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:robot",
	});
}

export default Component;

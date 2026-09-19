import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n0txld2wr.css';
import '../../css/f/fkn-vdbxm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n0txld2wr"/><path class="fkn-vdbxm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ticket",
	});
}

export default Component;

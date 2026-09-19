import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkn2rtb4z.css';
import '../../css/m/m6pakbbbl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wkn2rtb4z"/><path clip-rule="evenodd" class="m6pakbbbl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:smiling-face-with-tear",
	});
}

export default Component;

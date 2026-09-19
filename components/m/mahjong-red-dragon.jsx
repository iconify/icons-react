import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r33qufjhi.css';
import '../../css/o/o3kh53buu.css';
import '../../css/h/hfhg49b1p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r33qufjhi"/><path class="o3kh53buu"/><path class="hfhg49b1p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mahjong-red-dragon",
	});
}

export default Component;

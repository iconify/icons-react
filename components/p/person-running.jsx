import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yx32353iz.css';
import '../../css/u/uqgvfpbkg.css';
import '../../css/h/hzh6u4b5v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yx32353iz"/><path class="uqgvfpbkg"/><path class="hzh6u4b5v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-running",
	});
}

export default Component;

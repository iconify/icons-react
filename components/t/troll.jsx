import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9twmha0f.css';
import '../../css/j/j-q374b_r.css';
import '../../css/r/rvkd0rb-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y9twmha0f"/><path class="j-q374b_r"/><path class="rvkd0rb-a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:troll",
	});
}

export default Component;

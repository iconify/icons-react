import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xf671znkk.css';
import '../../css/i/inedr1buy.css';
import '../../css/p/ptcf6o90u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xf671znkk"/><path class="inedr1buy"/><path class="ptcf6o90u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:military-helmet",
	});
}

export default Component;

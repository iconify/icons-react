import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjnlgiz2y.css';
import '../../css/i/ik3r1xbjr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wjnlgiz2y"/><path class="ik3r1xbjr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sheaf-of-rice",
	});
}

export default Component;

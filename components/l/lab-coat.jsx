import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrtu1hbhx.css';
import '../../css/q/qeac7ybdg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rrtu1hbhx"/><path class="qeac7ybdg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:lab-coat",
	});
}

export default Component;

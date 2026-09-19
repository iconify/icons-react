import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zolwa8b5d.css';
import '../../css/s/sktks3i9d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zolwa8b5d"/><path class="sktks3i9d"/></g>`,
		"fallback": "bi:terminal-dash",
	});
}

export default Component;

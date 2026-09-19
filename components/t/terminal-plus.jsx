import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zolwa8b5d.css';
import '../../css/i/i-unzxbrv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zolwa8b5d"/><path class="i-unzxbrv"/></g>`,
		"fallback": "bi:terminal-plus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ar9w-aceu.css';
import '../../css/x/xvgqah6vc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ar9w-aceu"/><path class="xvgqah6vc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pager",
	});
}

export default Component;

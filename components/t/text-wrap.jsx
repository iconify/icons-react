import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpzqebchj.css';
import '../../css/d/dm8_jvbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xpzqebchj"/><path class="dm8_jvbys"/></g>`,
		"fallback": "pixelarticons:text-wrap",
	});
}

export default Component;

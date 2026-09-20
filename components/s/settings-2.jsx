import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehk2tob7z.css';
import '../../css/o/opl2gmb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ehk2tob7z"/><path class="opl2gmb4g"/></g>`,
		"fallback": "pixelarticons:settings-2",
	});
}

export default Component;

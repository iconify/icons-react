import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0gr6kbmk.css';
import '../../css/l/lsot8vkjb.css';
import '../../css/k/kvmdo0b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0gr6kbmk"/><path class="lsot8vkjb"/><path class="kvmdo0b0m"/></g>`,
		"fallback": "pixelarticons:scroll-horizontal",
	});
}

export default Component;

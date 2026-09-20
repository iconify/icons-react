import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ar0kiqktv.css';
import '../../css/p/pa4fm5akg.css';
import '../../css/y/ybtsdob7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ar0kiqktv"/><path class="pa4fm5akg"/><path class="ybtsdob7h"/></g>`,
		"fallback": "solar:videocamera-off-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybtsdob7h.css';
import '../../css/f/f2-_6mbta.css';
import '../../css/h/h2wkinbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ybtsdob7h"/><path class="f2-_6mbta"/><path class="h2wkinbwg"/></g>`,
		"fallback": "solar:videocamera-add-bold-duotone",
	});
}

export default Component;

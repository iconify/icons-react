import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/tla7g4mpv.css';
import '../../css/d/d4z8ksbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path clip-rule="evenodd" class="tla7g4mpv"/><path class="d4z8ksbxz"/></g>`,
		"fallback": "si:user-alt-6-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p69-zpbwm.css';
import '../../css/q/qqucfbc0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="p69-zpbwm"/><path class="qqucfbc0q"/></g>`,
		"fallback": "hugeicons:soup",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dt8jlkbav.css';
import '../../css/z/z9q2tz61p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dt8jlkbav"/><path class="z9q2tz61p"/></g>`,
		"fallback": "icon-park-solid:thumbs-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwidq8eyg.css';
import '../../css/w/wcn5vdzhi.css';
import '../../css/p/ps0g5sbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mwidq8eyg"/><path class="wcn5vdzhi"/><path class="ps0g5sbmq"/></g>`,
		"fallback": "iconamoon:mouse-duotone",
	});
}

export default Component;

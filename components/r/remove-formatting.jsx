import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jqpgwmixp.css';
import '../../css/z/zp8vosbvo.css';
import '../../css/k/ktpbhacqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jqpgwmixp"/><path class="zp8vosbvo"/><path class="ktpbhacqo wm-s"/></g>`,
		"fallback": "withicons-retro:remove-formatting",
	});
}

export default Component;

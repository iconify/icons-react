import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/p5q9gt7mp.css';
import '../../css/h/h_19s7bjx.css';
import '../../css/s/shwcvelcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="p5q9gt7mp"/><path class="h_19s7bjx"/><path class="shwcvelcu"/></g>`,
		"fallback": "mage:message-question-mark-round",
	});
}

export default Component;

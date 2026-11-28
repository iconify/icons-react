import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w64ay2bqp.css';
import '../../css/h/hjwa2-sfg.css';
import '../../css/q/qxwi8-b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w64ay2bqp"/><path class="hjwa2-sfg"/><path class="qxwi8-b3z"/></g>`,
		"fallback": "iconaut:phone-incoming",
	});
}

export default Component;

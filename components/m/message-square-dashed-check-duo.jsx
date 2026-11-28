import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjd2x0bfl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jrgpz7bvh.css';
import '../../css/g/gcbea1zjt.css';
import '../../css/j/j7k7ottks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjd2x0bfl secondary"/><g class="dt0cm9dhy primary"><path class="jrgpz7bvh"/><path class="gcbea1zjt"/><path class="j7k7ottks"/></g>`,
		"fallback": "iconaut:message-square-dashed-check-duo",
	});
}

export default Component;

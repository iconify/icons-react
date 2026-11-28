import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjd2x0bfl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hekhljb9b.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjd2x0bfl secondary"/><g class="dt0cm9dhy primary"><path class="hekhljb9b"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:message-square-off-duo",
	});
}

export default Component;

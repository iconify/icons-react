import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pgnq0mbit.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pgnq0mbit"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:message-circle-off",
	});
}

export default Component;

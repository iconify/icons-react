import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djy0icb9y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/clyp0ebhu.css';
import '../../css/b/bqp-165ha.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djy0icb9y secondary"/><g class="dt0cm9dhy primary"><path class="clyp0ebhu"/><path class="bqp-165ha"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:picture-in-picture-off-duo",
	});
}

export default Component;

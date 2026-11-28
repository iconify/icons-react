import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="clyp0ebhu"/><path class="bqp-165ha"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:picture-in-picture-off",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a8376lbnk.css';
import '../../css/a/a9_8oport.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a8376lbnk"/><path class="a9_8oport"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:pin-off",
	});
}

export default Component;

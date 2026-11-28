import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_j2c6bga.css';
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
		"content": `<path class="c_j2c6bga secondary"/><g class="dt0cm9dhy primary"><path class="a8376lbnk"/><path class="a9_8oport"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:pin-off-duo",
	});
}

export default Component;

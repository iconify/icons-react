import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ex5hlwbmh.css';
import '../../css/n/n47ug6nns.css';
import '../../css/f/fwmplnbfe.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ex5hlwbmh"/><path class="n47ug6nns"/><path class="fwmplnbfe"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:type-off",
	});
}

export default Component;

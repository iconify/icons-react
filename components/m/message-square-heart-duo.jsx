import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk3lszb2c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/n/nhr4esdiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xk3lszb2c"/><g class="dt0cm9dhy primary"><path class="dp12a2bii"/><path class="nhr4esdiv"/></g>`,
		"fallback": "iconaut:message-square-heart-duo",
	});
}

export default Component;

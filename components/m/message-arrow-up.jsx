import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/l/l5gkczrai.css';
import '../../css/f/f-6qk_6po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gtipehbld"/><path class="l5gkczrai"/><path class="f-6qk_6po"/></g>`,
		"fallback": "iconaut:message-arrow-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/v/vc_ou0neq.css';
import '../../css/e/e-9qjq23c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gtipehbld"/><path class="vc_ou0neq"/><path class="e-9qjq23c"/></g>`,
		"fallback": "iconaut:message-circle-warning",
	});
}

export default Component;

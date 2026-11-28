import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpb32sb8l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/h/hkzg94bdk.css';
import '../../css/r/r23awsbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wpb32sb8l"/><g class="dt0cm9dhy primary"><path class="gtipehbld"/><path class="hkzg94bdk"/><path class="r23awsbps"/></g>`,
		"fallback": "iconaut:message-circle-lock-duo",
	});
}

export default Component;

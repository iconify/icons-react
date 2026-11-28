import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/va5b0cwyk.css';
import '../../css/o/o4wz2ober.css';
import '../../css/j/jfa-fdaau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="va5b0cwyk"/><path class="o4wz2ober"/><path class="jfa-fdaau"/></g>`,
		"fallback": "iconaut:spline",
	});
}

export default Component;

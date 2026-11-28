import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h344ikbje.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/axayjezpl.css';
import '../../css/z/zxqyewwth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h344ikbje secondary"/><g class="dt0cm9dhy primary"><path class="axayjezpl"/><path class="zxqyewwth"/></g>`,
		"fallback": "iconaut:map-pin-check-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0r16e4cs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/axayjezpl.css';
import '../../css/h/h-xz0jv-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0r16e4cs secondary"/><g class="dt0cm9dhy primary"><path class="axayjezpl"/><circle class="h-xz0jv-b"/></g>`,
		"fallback": "iconaut:map-pin-duo",
	});
}

export default Component;

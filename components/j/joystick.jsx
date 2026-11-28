import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r1j4lk9ap.css';
import '../../css/c/clku-lbrt.css';
import '../../css/s/srnt8ebvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r1j4lk9ap"/><circle class="clku-lbrt"/><path class="srnt8ebvz"/></g>`,
		"fallback": "iconaut:joystick",
	});
}

export default Component;

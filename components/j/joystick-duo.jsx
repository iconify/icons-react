import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax6fwmbjw.css';
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
		"content": `<path class="ax6fwmbjw secondary"/><g class="dt0cm9dhy primary"><path class="r1j4lk9ap"/><circle class="clku-lbrt"/><path class="srnt8ebvz"/></g>`,
		"fallback": "iconaut:joystick-duo",
	});
}

export default Component;

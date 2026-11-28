import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-drp5bju.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s3aa3b7qt.css';
import '../../css/s/s0rcl214k.css';
import '../../css/d/dmnr1ibmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-drp5bju secondary"/><g class="dt0cm9dhy primary"><path class="s3aa3b7qt"/><path class="s0rcl214k"/><path class="dmnr1ibmk"/></g>`,
		"fallback": "iconaut:sticker-duo",
	});
}

export default Component;

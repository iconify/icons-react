import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3ugfqabr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ou8cchb0s.css';
import '../../css/h/hrh4chbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3ugfqabr secondary"/><g class="dt0cm9dhy primary"><path class="ou8cchb0s"/><path class="hrh4chbiy"/></g>`,
		"fallback": "iconaut:keyboard-duo",
	});
}

export default Component;

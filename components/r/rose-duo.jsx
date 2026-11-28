import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxkdyqb9v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mizpbdj-v.css';
import '../../css/g/ga4x5wbsg.css';
import '../../css/j/jf8eaab6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxkdyqb9v secondary"/><g class="dt0cm9dhy primary"><path class="mizpbdj-v"/><path class="ga4x5wbsg"/><path class="jf8eaab6s"/></g>`,
		"fallback": "iconaut:rose-duo",
	});
}

export default Component;

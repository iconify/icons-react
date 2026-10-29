import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/on-ep5vsm.css';
import '../../css/k/khk74ibto.css';
import '../../css/j/j7hpscfgt.css';
import '../../css/v/v7vmxhb7b.css';
import '../../css/i/i8enl9bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="on-ep5vsm"/><path class="khk74ibto"/><path class="j7hpscfgt wm-a"/><path class="v7vmxhb7b"/><path class="i8enl9bjs"/></g>`,
		"fallback": "withicons:mic-vocal-duo",
	});
}

export default Component;

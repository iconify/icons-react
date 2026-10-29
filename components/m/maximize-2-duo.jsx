import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f_o9585tx.css';
import '../../css/d/d86tz-2ji.css';
import '../../css/j/j7ffi82vm.css';
import '../../css/g/guyzwybqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f_o9585tx"/><path class="d86tz-2ji wm-a"/><path class="j7ffi82vm"/><path class="guyzwybqo wm-a"/></g>`,
		"fallback": "withicons:maximize-2-duo",
	});
}

export default Component;

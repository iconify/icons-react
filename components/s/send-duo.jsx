import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktk-1bz9k.css';
import '../../css/b/btb9bc3qj.css';
import '../../css/v/v3eqelbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ktk-1bz9k"/><path class="btb9bc3qj wm-a"/><path class="v3eqelbpl"/></g>`,
		"fallback": "withicons:send-duo",
	});
}

export default Component;

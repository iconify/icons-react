import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v3eqelbpl.css';
import '../../css/b/btb9bc3qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v3eqelbpl"/><path class="btb9bc3qj wm-a"/></g>`,
		"fallback": "withicons:send",
	});
}

export default Component;

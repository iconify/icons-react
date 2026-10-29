import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bd2t1bccx.css';
import '../../css/f/fqpodu9zv.css';
import '../../css/u/ugnb4kbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bd2t1bccx"/><path class="fqpodu9zv wm-a"/><path class="ugnb4kbse"/></g>`,
		"fallback": "withicons:paint-roller",
	});
}

export default Component;

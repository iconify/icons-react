import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_egs8b1e.css';
import '../../css/s/sencbj8te.css';
import '../../css/h/hge4sbcta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_egs8b1e"/><path class="sencbj8te"/><path class="hge4sbcta"/></g>`,
		"fallback": "solar:kanban-bold",
	});
}

export default Component;

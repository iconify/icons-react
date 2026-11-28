import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1-cm4brz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whtvn7boo.css';
import '../../css/d/d8v54zgrd.css';
import '../../css/s/s7l4crbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1-cm4brz secondary"/><g class="dt0cm9dhy primary"><path class="whtvn7boo"/><path class="d8v54zgrd"/><path class="s7l4crbfx"/></g>`,
		"fallback": "iconaut:pineapple-duo",
	});
}

export default Component;

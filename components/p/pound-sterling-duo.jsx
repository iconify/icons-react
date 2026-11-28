import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fci7w5bkp.css';
import '../../css/t/tmzthsb9o.css';
import '../../css/e/e_d1ucx9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fci7w5bkp"/><path class="tmzthsb9o"/><path class="e_d1ucx9w"/></g>`,
		"fallback": "iconaut:pound-sterling-duo",
	});
}

export default Component;

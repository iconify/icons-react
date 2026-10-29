import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rkfpx0b_i.css';
import '../../css/f/f86q_5yiw.css';
import '../../css/e/emha3wbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rkfpx0b_i"/><path class="f86q_5yiw wm-s"/><path class="emha3wbqe"/></g>`,
		"fallback": "withicons:user-plus-duo",
	});
}

export default Component;

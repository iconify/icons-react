import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rkfpx0b_i.css';
import '../../css/i/ihj2_9b2p.css';
import '../../css/e/emha3wbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rkfpx0b_i"/><path class="ihj2_9b2p wm-s"/><path class="emha3wbqe"/></g>`,
		"fallback": "withicons:user-minus-duo",
	});
}

export default Component;

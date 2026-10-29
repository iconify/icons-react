import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/emha3wbqe.css';
import '../../css/p/p65k-7b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="emha3wbqe"/><path class="p65k-7b9s wm-s"/></g>`,
		"fallback": "withicons:user-x",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/d/d074ckbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="st-oxhb_e"/><path class="d074ckbgd wm-s"/></g>`,
		"fallback": "withicons:volume-off",
	});
}

export default Component;

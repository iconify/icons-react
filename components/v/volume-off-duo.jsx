import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k459z7k3d.css';
import '../../css/d/d074ckbgd.css';
import '../../css/s/st-oxhb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k459z7k3d"/><path class="d074ckbgd wm-s"/><path class="st-oxhb_e"/></g>`,
		"fallback": "withicons:volume-off-duo",
	});
}

export default Component;

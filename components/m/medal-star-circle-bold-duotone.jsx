import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz6gx4b2e.css';
import '../../css/k/k8vq9tb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rz6gx4b2e"/><path clip-rule="evenodd" class="k8vq9tb8u"/></g>`,
		"fallback": "solar:medal-star-circle-bold-duotone",
	});
}

export default Component;

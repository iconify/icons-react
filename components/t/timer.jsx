import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tbee2l8-g.css';
import '../../css/v/v4-vqmvnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tbee2l8-g"/><path class="v4-vqmvnf wm-a"/></g>`,
		"fallback": "withicons:timer",
	});
}

export default Component;

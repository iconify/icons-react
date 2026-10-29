import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yxa4pbbgv.css';
import '../../css/y/ynqmjxh6x.css';
import '../../css/o/o3qx-w_0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yxa4pbbgv"/><path class="wm-a ynqmjxh6x"/><path class="o3qx-w_0y wm-s"/></g>`,
		"fallback": "withicons:paisley",
	});
}

export default Component;

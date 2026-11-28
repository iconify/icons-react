import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr99gxblo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cq_0n3bjh.css';
import '../../css/a/agr5fpl-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr99gxblo secondary"/><g class="dt0cm9dhy primary"><path class="cq_0n3bjh"/><path class="agr5fpl-z"/></g>`,
		"fallback": "iconaut:pause-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ap2vq_ggp.css';
import '../../css/z/z5a-asbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ap2vq_ggp"/><path class="z5a-asbbl"/></g>`,
		"fallback": "iconaut:megaphone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/x/x2ocqx88i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ljeitrr-k"/><path class="wm-s x2ocqx88i"/></g>`,
		"fallback": "withicons:user-star",
	});
}

export default Component;

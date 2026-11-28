import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slknnlbbl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uxfqx7b8a.css';
import '../../css/k/kbe5qkb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary slknnlbbl"/><g class="dt0cm9dhy primary"><path class="uxfqx7b8a"/><path class="kbe5qkb7r"/></g>`,
		"fallback": "iconaut:octagon-minus-duo",
	});
}

export default Component;

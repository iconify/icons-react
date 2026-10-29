import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/buvuav6_l.css';
import '../../css/y/y9asu80_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="buvuav6_l"/><path class="wm-a y9asu80_b"/></g>`,
		"fallback": "withicons:italic-duo",
	});
}

export default Component;

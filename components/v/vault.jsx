import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yj_y3dp7d.css';
import '../../css/f/f48qsgb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yj_y3dp7d"/><path class="f48qsgb5t wm-a"/></g>`,
		"fallback": "withicons:vault",
	});
}

export default Component;

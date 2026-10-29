import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fvwflou2k.css';
import '../../css/w/wk7jmzmpf.css';
import '../../css/y/ydpucsi6v.css';
import '../../css/k/kgm9zh0zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fvwflou2k"/><path class="wk7jmzmpf wm-a"/><path class="ydpucsi6v"/><path class="kgm9zh0zc"/></g>`,
		"fallback": "withicons:rainbow-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-du3gbxc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x_5g46hau.css';
import '../../css/m/my3y2fbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-du3gbxc secondary"/><g class="dt0cm9dhy primary"><path class="x_5g46hau"/><path class="my3y2fbmy"/></g>`,
		"fallback": "iconaut:skip-back-duo",
	});
}

export default Component;

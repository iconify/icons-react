import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi8j84bbv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dmacaebrz.css';
import '../../css/k/koq907bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi8j84bbv secondary"/><g class="dt0cm9dhy primary"><path class="dmacaebrz"/><path class="koq907bzc"/></g>`,
		"fallback": "iconaut:slice-duo",
	});
}

export default Component;

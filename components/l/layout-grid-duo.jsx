import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/af642qbhh.css';
import '../../css/b/bqfneeboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="af642qbhh"/><path class="bqfneeboe"/></g>`,
		"fallback": "withicons:layout-grid-duo",
	});
}

export default Component;

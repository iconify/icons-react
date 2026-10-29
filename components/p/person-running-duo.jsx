import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wu-p0vb5s.css';
import '../../css/z/z6enqggrv.css';
import '../../css/v/vh1b5unvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wu-p0vb5s"/><path class="wm-a z6enqggrv"/><path class="vh1b5unvh"/></g>`,
		"fallback": "withicons:person-running-duo",
	});
}

export default Component;

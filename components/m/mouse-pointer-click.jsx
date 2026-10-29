import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zh570bf1g.css';
import '../../css/q/qjmhcfs4r.css';
import '../../css/u/u0_-tbopx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zh570bf1g"/><path class="qjmhcfs4r wm-a"/><path class="u0_-tbopx wm-s"/></g>`,
		"fallback": "withicons:mouse-pointer-click",
	});
}

export default Component;

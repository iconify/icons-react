import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v4bsxzb7r.css';
import '../../css/h/h2u2p5b7j.css';
import '../../css/f/fjk_47b8s.css';
import '../../css/z/zq1i1eb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v4bsxzb7r"/><path class="h2u2p5b7j wm-s"/><path class="fjk_47b8s"/><path class="wm-a zq1i1eb4q"/></g>`,
		"fallback": "withicons:remote-control-duo",
	});
}

export default Component;

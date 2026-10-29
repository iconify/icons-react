import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ti7s0kwlh.css';
import '../../css/c/cft-n96oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ti7s0kwlh"/><path class="cft-n96oy wm-a"/></g>`,
		"fallback": "withicons:video-call",
	});
}

export default Component;

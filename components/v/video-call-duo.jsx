import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ah371nbbv.css';
import '../../css/v/vfx376v4r.css';
import '../../css/x/xm6k-ibev.css';
import '../../css/t/ti7s0kwlh.css';
import '../../css/r/rcb7clbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ah371nbbv"/><path class="vfx376v4r wm-a"/><path class="wm-a xm6k-ibev"/><path class="ti7s0kwlh"/><path class="rcb7clbki wm-a"/></g>`,
		"fallback": "withicons:video-call-duo",
	});
}

export default Component;

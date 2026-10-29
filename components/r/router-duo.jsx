import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hc6cvzxwd.css';
import '../../css/v/vcbo6ob6i.css';
import '../../css/f/frsup1bzk.css';
import '../../css/h/hchtjubcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hc6cvzxwd"/><path class="vcbo6ob6i wm-a"/><path class="frsup1bzk"/><path class="hchtjubcw wm-a"/></g>`,
		"fallback": "withicons:router-duo",
	});
}

export default Component;

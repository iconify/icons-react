import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sj279cslk.css';
import '../../css/k/k4othtbmn.css';
import '../../css/t/t99xelbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sj279cslk"/><path class="k4othtbmn wm-a"/><path class="t99xelbnc"/></g>`,
		"fallback": "withicons:mail-open-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t99xelbnc.css';
import '../../css/k/k4othtbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t99xelbnc"/><path class="k4othtbmn wm-a"/></g>`,
		"fallback": "withicons:mail-open",
	});
}

export default Component;

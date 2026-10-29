import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ch4j9abio.css';
import '../../css/p/pm96j7xxh.css';
import '../../css/w/wiker-buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ch4j9abio"/><path class="pm96j7xxh wm-a"/><path class="wiker-buu wm-s"/></g>`,
		"fallback": "withicons:smartphone-message",
	});
}

export default Component;

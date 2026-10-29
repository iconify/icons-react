import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eawnvkb-e.css';
import '../../css/l/lp93fbczt.css';
import '../../css/w/wiker-buu.css';
import '../../css/c/ch4j9abio.css';
import '../../css/p/pm96j7xxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eawnvkb-e"/><path class="lp93fbczt wm-s"/><path class="wiker-buu wm-s"/><path class="ch4j9abio"/><path class="pm96j7xxh wm-a"/></g>`,
		"fallback": "withicons:smartphone-message-duo",
	});
}

export default Component;

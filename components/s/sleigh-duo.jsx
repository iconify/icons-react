import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/luw39ft7l.css';
import '../../css/x/xh1b6ubxr.css';
import '../../css/t/ti18yabmh.css';
import '../../css/t/t0axcbk6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="luw39ft7l"/><path class="wm-a xh1b6ubxr"/><path class="ti18yabmh"/><path class="t0axcbk6e wm-a"/></g>`,
		"fallback": "withicons:sleigh-duo",
	});
}

export default Component;

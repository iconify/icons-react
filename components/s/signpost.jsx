import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r38j0dpyp.css';
import '../../css/p/pa5m5tyoc.css';
import '../../css/w/w1pmvsbho.css';
import '../../css/m/muzvyrzzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r38j0dpyp"/><path class="pa5m5tyoc"/><path class="w1pmvsbho"/><path class="muzvyrzzs"/></g>`,
		"fallback": "iconaut:signpost",
	});
}

export default Component;

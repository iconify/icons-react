import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d2q1tdbbp.css';
import '../../css/m/m3-ef15ju.css';
import '../../css/t/t_jrdsb4n.css';
import '../../css/k/kcbeidzug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d2q1tdbbp"/><path class="m3-ef15ju wm-a"/><path class="t_jrdsb4n wm-a"/><path class="kcbeidzug"/></g>`,
		"fallback": "withicons:pipette-duo",
	});
}

export default Component;

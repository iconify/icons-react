import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kcbeidzug.css';
import '../../css/t/t_jrdsb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kcbeidzug"/><path class="t_jrdsb4n wm-a"/></g>`,
		"fallback": "withicons:pipette",
	});
}

export default Component;

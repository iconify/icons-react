import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iv6i0wvsu.css';
import '../../css/q/qfd-q7blm.css';
import '../../css/k/k2m212bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="iv6i0wvsu"/><path class="qfd-q7blm wm-a"/><path class="k2m212bgo"/></g>`,
		"fallback": "withicons:star-half-duo",
	});
}

export default Component;

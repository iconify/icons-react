import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hnvjbpuwe.css';
import '../../css/g/gav9x_bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hnvjbpuwe"/><path class="gav9x_bhv wm-a"/></g>`,
		"fallback": "withicons:log-in",
	});
}

export default Component;

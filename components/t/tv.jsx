import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qy2dwvndc.css';
import '../../css/v/vug_rebuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qy2dwvndc"/><path class="vug_rebuj wm-a"/></g>`,
		"fallback": "withicons:tv",
	});
}

export default Component;

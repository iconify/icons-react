import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kih6jmt2f.css';
import '../../css/v/vug_rebuj.css';
import '../../css/q/qy2dwvndc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kih6jmt2f"/><path class="vug_rebuj wm-a"/><path class="qy2dwvndc"/></g>`,
		"fallback": "withicons:tv-duo",
	});
}

export default Component;

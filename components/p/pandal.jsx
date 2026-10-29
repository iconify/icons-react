import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q2pcvohsl.css';
import '../../css/p/pkkfi_6fi.css';
import '../../css/x/xy8yzjl3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q2pcvohsl"/><path class="pkkfi_6fi wm-a"/><path class="wm-a xy8yzjl3x"/></g>`,
		"fallback": "withicons:pandal",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4eqebb1f.css';
import '../../css/o/omhuwgbnv.css';
import '../../css/t/tk3xwsbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b4eqebb1f"/><path class="omhuwgbnv"/><path class="tk3xwsbbh"/></g>`,
		"fallback": "iconaut:move-horizontal-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvkui2xsj.css';
import '../../css/q/qmu9r41xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvkui2xsj"/><path class="qmu9r41xr"/></g>`,
		"fallback": "tdesign:portrait",
	});
}

export default Component;

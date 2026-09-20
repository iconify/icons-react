import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mh56y2inu.css';
import '../../css/a/a-1uicclk.css';
import '../../css/h/hf53x_ydx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mh56y2inu"/><path class="a-1uicclk"/><path class="hf53x_ydx"/></g>`,
		"fallback": "streamline-freehand-color:receipt",
	});
}

export default Component;

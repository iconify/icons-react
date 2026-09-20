import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mxpiv0byi.css';
import '../../css/h/hdc10yrqn.css';
import '../../css/v/vwk_je8sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mxpiv0byi"/><path class="hdc10yrqn"/><path class="vwk_je8sw"/></g>`,
		"fallback": "streamline-freehand-color:move-rectangle-left",
	});
}

export default Component;

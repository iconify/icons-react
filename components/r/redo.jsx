import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vbs26_9cw.css';
import '../../css/n/njywq6b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vbs26_9cw"/><path class="njywq6b0y"/></g>`,
		"fallback": "iconoir:redo",
	});
}

export default Component;

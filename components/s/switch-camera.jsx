import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qaaiwl6vo.css';
import '../../css/d/dpy1-tb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qaaiwl6vo"/><path class="dpy1-tb-e"/></g>`,
		"fallback": "hugeicons:switch-camera",
	});
}

export default Component;

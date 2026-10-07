import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nkpbhqfkh.css';
import '../../css/b/b64l0dbmf.css';
import '../../css/t/t881ox47o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nkpbhqfkh"/><path class="b64l0dbmf"/><path class="t881ox47o"/></g>`,
		"fallback": "iconoir:rotate-camera-right",
	});
}

export default Component;

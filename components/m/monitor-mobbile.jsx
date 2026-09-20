import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j50atccst.css';
import '../../css/m/mxqmy38et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j50atccst"/><path class="mxqmy38et"/></g>`,
		"fallback": "reicon:monitor-mobbile",
	});
}

export default Component;

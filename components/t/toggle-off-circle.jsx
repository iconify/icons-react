import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbnr4p1ic.css';
import '../../css/j/j7zv28beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rbnr4p1ic"/><path class="j7zv28beo"/></g>`,
		"fallback": "reicon:toggle-off-circle",
	});
}

export default Component;

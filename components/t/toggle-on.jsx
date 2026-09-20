import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9e8q0brk.css';
import '../../css/w/wles-jbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e9e8q0brk"/><path class="wles-jbug"/></g>`,
		"fallback": "reicon:toggle-on",
	});
}

export default Component;

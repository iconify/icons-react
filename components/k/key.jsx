import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/i/idn0knbut.css';
import '../../css/i/iux_3cbqn.css';
import '../../css/w/w0_c1ibjt.css';

const viewBox = {"width":41,"height":41,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="idn0knbut"/><path class="iux_3cbqn"/><path class="w0_c1ibjt"/></g>`,
		"fallback": "streamline-stickies-color:key",
	});
}

export default Component;

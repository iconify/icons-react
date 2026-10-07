import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dr3q1c4he.css';
import '../../css/j/jom5s_aeb.css';
import '../../css/h/h6qh__-gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dr3q1c4he"/><rect class="jom5s_aeb"/><path class="h6qh__-gv"/></g>`,
		"fallback": "iconoir:microphone-warning",
	});
}

export default Component;

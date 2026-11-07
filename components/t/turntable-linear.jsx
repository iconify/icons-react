import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h-yburvtu.css';
import '../../css/x/x8w5itp5u.css';
import '../../css/z/zhaqmra8c.css';
import '../../css/q/q91v76bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h-yburvtu"/><path class="x8w5itp5u"/><path class="zhaqmra8c"/><path class="q91v76bet"/></g>`,
		"fallback": "solar:turntable-linear",
	});
}

export default Component;

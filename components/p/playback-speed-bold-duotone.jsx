import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwsnehvvy.css';
import '../../css/y/y5jlu0b0x.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/ns_onqv1v.css';
import '../../css/g/g-px437dg.css';
import '../../css/j/j0v4cub4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vwsnehvvy"/><path class="y5jlu0b0x"/><g class="mc2zb0bvp"><path class="ns_onqv1v"/><path class="g-px437dg"/><path class="j0v4cub4m"/></g></g>`,
		"fallback": "solar:playback-speed-bold-duotone",
	});
}

export default Component;

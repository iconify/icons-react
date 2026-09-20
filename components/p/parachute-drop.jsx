import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s74-1j5ey.css';
import '../../css/h/hv4r2jbbw.css';
import '../../css/l/luos77azp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s74-1j5ey"/><path class="hv4r2jbbw"/><path class="luos77azp"/></g>`,
		"fallback": "streamline-color:parachute-drop",
	});
}

export default Component;

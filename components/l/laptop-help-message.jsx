import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shvygbdwd.css';
import '../../css/d/d6niczg_l.css';
import '../../css/z/z3c_x4ivb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="shvygbdwd"/><path class="d6niczg_l"/><path class="z3c_x4ivb"/></g>`,
		"fallback": "streamline-ultimate:laptop-help-message",
	});
}

export default Component;

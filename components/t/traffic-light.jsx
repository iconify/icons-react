import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z298f_00y.css';
import '../../css/m/mbkz3y1jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z298f_00y"/><path class="mbkz3y1jr"/></g>`,
		"fallback": "streamline-sharp:traffic-light",
	});
}

export default Component;

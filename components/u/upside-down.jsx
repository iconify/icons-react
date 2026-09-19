import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbkv8u2i.css';
import '../../css/a/a-nr90z_g.css';
import '../../css/i/ikrkupm8l.css';
import '../../css/o/ockxf75_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqbkv8u2i"/><path class="a-nr90z_g"/><circle class="ikrkupm8l"/><circle class="ockxf75_m"/>`,
		"fallback": "bx:upside-down",
	});
}

export default Component;
